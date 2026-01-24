<script lang="ts">
	import { resolve } from '$app/paths';
	import Footer from '$lib/components/app/footer.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	let programs = $derived(data?.programs);

	let programList = $derived(programs?.map((p) => p.metadata));
	let selectedCategory = $state('All');
	let searchText = $state('');

	let categories = $derived(
		programList.reduce(
			(acc, curr) => {
				acc[curr.category] ??= 0;
				acc[curr.category]++;

				return acc;
			},
			{} as Record<string, number>
		)
	);
	let filteredPrograms = $derived.by(() => {
		if (selectedCategory === 'All') {
			return programList.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()));
		}

		return programList.filter(
			(program) =>
				program.category === selectedCategory &&
				program.title.toLowerCase().includes(searchText.toLowerCase())
		);
	});

	function handleCategoryClick(category: string) {
		selectedCategory = category;
	}

	function clearSearchText() {
		searchText = '';
	}
</script>

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				School <span class="text-blue-500 [view-transition-name:page-header-title]">Programs</span>
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				See what programs we offer and how to get involved.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<div class="mx-auto max-w-7xl">
			<ul class="flex flex-wrap gap-2 border-b py-5">
				<div class="relative">
					<Input bind:value={searchText} class="w-full lg:w-50" placeholder="Search..." />
					{#if searchText?.length}
						<button
							onclick={clearSearchText}
							class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground"
							in:fade
							out:fade><Icon icon="lucide:x" /></button
						>
					{/if}
				</div>
				<li>
					<Button
						onclick={() => handleCategoryClick('All')}
						variant="outline"
						class={cn({
							'bg-blue-500 text-white hover:bg-blue-700 hover:text-white dark:bg-blue-500 dark:hover:bg-blue-700':
								selectedCategory === 'All'
						})}>All Programs ({programList?.length})</Button
					>
				</li>
				{#each Object.entries(categories) as [category, count] (category)}
					<li>
						<Button
							onclick={() => handleCategoryClick(category)}
							variant="outline"
							class={cn({
								'bg-blue-500 text-white hover:bg-blue-700 hover:text-white dark:bg-blue-500 dark:hover:bg-blue-700':
									selectedCategory === category
							})}>{category} ({count})</Button
						>
					</li>
				{/each}
			</ul>

			{#if filteredPrograms.length > 0}
				<div class="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
					{#each filteredPrograms as program (program.id)}
						<a
							href={resolve(`/programs/${program.id}`)}
							class="row-span-2 grid h-full grid-rows-subgrid"
							animate:flip={{ duration: 300 }}
						>
							<Card class="row-span-2 grid h-full grid-rows-subgrid">
								<CardHeader class="h-fit">
									<CardTitle>{program.title}</CardTitle>
									<CardDescription>{program.description}</CardDescription>
									<div class="mt-3 w-fit rounded-lg bg-muted px-2 py-0.5 text-xs font-semibold">
										{program.category}
									</div>
								</CardHeader>
								<CardContent>
									<div class="flex items-center gap-1 text-xs text-muted-foreground">
										<Icon icon="lucide:user" />
										{program.teacher}
									</div>
								</CardContent>
							</Card>
						</a>
					{/each}
				</div>
			{:else}
				<div class="mt-5 text-center text-xs text-muted-foreground lg:min-h-62.5">
					No posts found.
				</div>
			{/if}
		</div>
	</div>

	<Footer />
</main>

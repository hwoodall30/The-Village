<script lang="ts">
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
	import careers from '$lib/data/careers.json';
	import ApplicationDialog from '$lib/components/app/application-dialog.svelte';

	let careersList = $derived(careers.filter((career) => career.active === true));

	let selectedCategory = $state('All');
	let searchText = $state('');

	let categories = $derived(
		careersList.reduce(
			(acc, curr) => {
				acc[curr.type] ??= 0;
				acc[curr.type]++;

				return acc;
			},
			{} as Record<string, number>
		)
	);
	let filteredCareers = $derived.by(() => {
		if (selectedCategory === 'All') {
			return careersList.filter((p) => p.position.toLowerCase().includes(searchText.toLowerCase()));
		}

		return careersList.filter(
			(program) =>
				program.type === selectedCategory &&
				program.position.toLowerCase().includes(searchText.toLowerCase())
		);
	});

	function handleCategoryClick(category: string) {
		selectedCategory = category;
	}

	function clearSearchText() {
		searchText = '';
	}
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				Careers at <span class="text-blue-500 [view-transition-name:page-header-title]"
					>The Village</span
				>
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				Join our team and help us create a Christ-centered educational community where families are
				empowered and learning blends the best of homeschool and traditional school with flexibility
				and collaboration.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<div class="mx-auto max-w-7xl">
			{#if careers?.length > 0}
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
							})}>All Careers ({careersList?.length})</Button
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

				{#if filteredCareers.length > 0}
					<div class="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
						{#each filteredCareers as career (career.id)}
							<div
								class="row-span-2 grid h-full grid-rows-subgrid"
								animate:flip={{ duration: 300 }}
							>
								<Card class="row-span-2 grid h-full grid-rows-subgrid">
									<CardHeader class="h-fit">
										<CardTitle>{career.position}</CardTitle>
										<CardDescription>{career.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<ApplicationDialog />
									</CardContent>
								</Card>
							</div>
						{/each}
					</div>
				{:else}
					<div class="mt-5 text-center text-xs text-muted-foreground">
						<Icon icon="lucide:filter" class="mx-auto mb-2 size-5" />
						No careers found matching your criteria.
						<br />
						Try adjusting your search or filter to find what you're looking for.
					</div>
				{/if}
			{:else}
				<div class="mt-5 text-center text-xs text-muted-foreground">
					<Icon icon="lucide:briefcase" class="mx-auto mb-2 size-5" />
					There are no open positions at the moment.
					<br />
					Please check back later for updates or reach out to us if you're interested in joining our team!
				</div>
			{/if}
		</div>
	</div>

	<Footer />
</main>

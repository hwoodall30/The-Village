<script lang="ts">
	import { BrandButton, BrandCard } from '$lib/components/app/brand';
	import { CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	type ProgramMetaData = {
		id: number;
		title: string;
		description: string;
		teacher: string;
		category: string;
	};

	let { programs = [] }: { programs: { metadata: ProgramMetaData }[] } = $props();
	let selectedCategory = $state('All');
	let searchText = $state('');

	let programList = $derived(programs.map((program) => program.metadata));
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
		const normalizedSearch = searchText.toLowerCase();

		return programList.filter((program) => {
			const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
			const matchesSearch = program.title.toLowerCase().includes(normalizedSearch);

			return matchesCategory && matchesSearch;
		});
	});
</script>

<div>
	<ul class="flex flex-wrap gap-2 border-b border-border pb-5">
		<div class="relative">
			<Input
				bind:value={searchText}
				class="h-11 w-full rounded-none bg-village-paper lg:w-56"
				placeholder="Search..."
			/>
			{#if searchText?.length}
				<button
					onclick={() => (searchText = '')}
					class="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
					aria-label="Clear search"
					in:fade
					out:fade><Icon icon="lucide:x" /></button
				>
			{/if}
		</div>
		<li>
			<BrandButton
				onclick={() => (selectedCategory = 'All')}
				tone={selectedCategory === 'All' ? 'primary' : 'outline'}
				>All Programs ({programList.length})</BrandButton
			>
		</li>
		{#each Object.entries(categories) as [category, count] (category)}
			<li>
				<BrandButton
					onclick={() => (selectedCategory = category)}
					tone={selectedCategory === category ? 'primary' : 'outline'}
					>{category} ({count})</BrandButton
				>
			</li>
		{/each}
	</ul>

	{#if filteredPrograms.length > 0}
		<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
			{#each filteredPrograms as program (program.id)}
				<div class="row-span-2 grid h-full grid-rows-subgrid" animate:flip={{ duration: 300 }}>
					<BrandCard class="row-span-2 grid h-full grid-rows-subgrid">
						<CardHeader class="h-fit">
							<CardTitle class="font-display text-2xl text-village-navy">{program.title}</CardTitle>
							<CardDescription class="leading-6">{program.description}</CardDescription>
							<div
								class="mt-3 w-fit rounded-full bg-village-sage px-3 py-1 text-xs font-bold tracking-[0.08em] text-village-green uppercase"
							>
								{program.category}
							</div>
						</CardHeader>
						<CardContent>
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<Icon icon="lucide:user" />
								{program.teacher}
							</div>
						</CardContent>
					</BrandCard>
				</div>
			{/each}
		</div>
	{:else}
		<div class="mt-8 min-h-40 text-center text-sm text-muted-foreground">No programs found.</div>
	{/if}
</div>

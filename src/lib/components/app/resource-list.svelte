<script lang="ts">
	import { resolve } from '$app/paths';
	import { BrandButton, BrandCard } from '$lib/components/app/brand';
	import { CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import Icon from '@iconify/svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	type ResourceMetaData = {
		id: number;
		title: string;
		date: string;
		description: string;
		author: string;
		category: string;
	};

	let { resources = [] }: { resources: { metadata: ResourceMetaData }[] } = $props();
	let selectedCategory = $state('All');
	let searchText = $state('');

	let resourcePosts = $derived(resources.map((resource) => resource.metadata));
	let categories = $derived(
		resourcePosts.reduce(
			(acc, curr) => {
				acc[curr.category] ??= 0;
				acc[curr.category]++;

				return acc;
			},
			{} as Record<string, number>
		)
	);
	let filteredResourcePosts = $derived.by(() => {
		const normalizedSearch = searchText.toLowerCase();

		return resourcePosts.filter((post) => {
			const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
			const matchesSearch = post.title.toLowerCase().includes(normalizedSearch);

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
				>All Posts ({resourcePosts.length})</BrandButton
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

	{#if filteredResourcePosts.length > 0}
		<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
			{#each filteredResourcePosts as post (post.id)}
				<a
					href={resolve(`/resources/${post.id}`)}
					class="row-span-2 grid h-full grid-rows-subgrid"
					animate:flip={{ duration: 300 }}
				>
					<BrandCard
						class="row-span-2 grid h-full grid-rows-subgrid transition-colors hover:border-village-green"
					>
						<CardHeader class="h-fit">
							<CardTitle class="font-display text-2xl text-village-navy">{post.title}</CardTitle>
							<CardDescription class="leading-6">{post.description}</CardDescription>
							<div
								class="mt-3 w-fit rounded-full bg-village-sage px-3 py-1 text-xs font-bold tracking-[0.08em] text-village-green uppercase"
							>
								{post.category}
							</div>
						</CardHeader>
						<CardContent class="flex flex-wrap justify-between gap-3">
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<Icon icon="lucide:user" />
								{post.author}
							</div>
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<Icon icon="lucide:calendar" />
								{post.date}
							</div>
						</CardContent>
					</BrandCard>
				</a>
			{/each}
		</div>
	{:else}
		<div class="mt-8 min-h-40 text-center text-sm text-muted-foreground">No posts found.</div>
	{/if}
</div>

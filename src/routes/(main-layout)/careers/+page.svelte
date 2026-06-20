<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandButton, BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';
	import { CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
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
		const normalizedSearch = searchText.toLowerCase();

		return careersList.filter((career) => {
			const matchesCategory = selectedCategory === 'All' || career.type === selectedCategory;
			const matchesSearch = career.position.toLowerCase().includes(normalizedSearch);

			return matchesCategory && matchesSearch;
		});
	});
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Careers"
		titleBefore="Careers at "
		titleAccent="The Village"
		description="Join our team and help us create a Christ-centered educational community where families are empowered and learning blends flexibility, collaboration, and purpose."
	/>

	<BrandSection>
		{#if careers?.length > 0}
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
						>All Careers ({careersList?.length})</BrandButton
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

			{#if filteredCareers.length > 0}
				<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
					{#each filteredCareers as career (career.id)}
						<div class="row-span-2 grid h-full grid-rows-subgrid" animate:flip={{ duration: 300 }}>
							<BrandCard class="row-span-2 grid h-full grid-rows-subgrid">
								<CardHeader class="h-fit">
									<CardTitle class="font-display text-2xl text-village-navy"
										>{career.position}</CardTitle
									>
									<CardDescription class="leading-6">{career.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<ApplicationDialog />
								</CardContent>
							</BrandCard>
						</div>
					{/each}
				</div>
			{:else}
				<div class="mt-8 text-center text-sm text-muted-foreground">
					<Icon icon="lucide:filter" class="mx-auto mb-2 size-5" />
					No careers found matching your criteria.
					<br />
					Try adjusting your search or filter to find what you're looking for.
				</div>
			{/if}
		{:else}
			<div class="mt-8 text-center text-sm text-muted-foreground">
				<Icon icon="lucide:briefcase" class="mx-auto mb-2 size-5" />
				There are no open positions at the moment.
				<br />
				Please check back later for updates or reach out to us if you're interested in joining our team!
			</div>
		{/if}
	</BrandSection>

	<Footer />
</main>

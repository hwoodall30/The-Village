<script>
	import Footer from '$lib/components/app/footer.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import staff from '$lib/data/staff.json';
</script>

<main>
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				All <span class="text-blue-500 [view-transition-name:page-header-title]">Staff</span>
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
				tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
				diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
				nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="mx-auto max-w-7xl px-5 py-20">
		<div class="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
			{#each staff as s (s.name)}
				<Card class="row-span-4 grid h-full grid-rows-subgrid p-6">
					<CardHeader class="contents">
						<img
							src={s.image}
							alt={s.name}
							class="h-50 w-50 justify-self-center rounded-full border object-cover object-top"
						/>
						<div class="flex flex-col items-center gap-2">
							<CardTitle class="text-center">{s.name}</CardTitle>
							<div
								class="w-fit rounded-full bg-muted px-2 py-0.5 text-center text-xs font-semibold"
							>
								{s.position}
							</div>
						</div>
						<CardDescription class="text-center">{s.description}</CardDescription>
					</CardHeader>
				</Card>
			{/each}
		</div>
	</div>

	<Footer />
</main>

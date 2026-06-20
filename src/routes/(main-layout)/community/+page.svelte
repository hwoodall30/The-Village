<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';
	import { CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import staff from '$lib/data/staff.json';
</script>

<main>
	<BrandPageHeader
		eyebrow="Community"
		titleBefore="Known. Loved. "
		titleAccent="Walking Together."
		description="The Village Collaborative is built around partnership: parents, students, and staff learning and growing in a close Christ-centered community."
	/>

	<BrandSection>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="font-display text-4xl text-village-navy">Our Community</h2>
			<p class="mt-4 text-lg leading-8 text-muted-foreground">
				Small community is one of the ways we help families homeschool with confidence and children
				grow with support.
			</p>
		</div>

		<div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
			{#each staff as s (s.name)}
				<BrandCard class="row-span-4 grid h-full grid-rows-subgrid p-6">
					<CardHeader class="contents">
						<img
							src={s.image}
							alt={s.name}
							class="size-48 justify-self-center rounded-full border-4 border-village-paper object-cover object-top"
						/>
						<div class="flex flex-col items-center gap-2">
							<CardTitle class="font-display text-center text-2xl text-village-navy"
								>{s.name}</CardTitle
							>
							<div
								class="w-fit rounded-full bg-village-sage px-3 py-1 text-center text-xs font-bold tracking-[0.08em] text-village-green uppercase"
							>
								{s.position}
							</div>
						</div>
						<CardDescription class="text-center leading-6">{s.description}</CardDescription>
					</CardHeader>
				</BrandCard>
			{/each}
		</div>
	</BrandSection>

	<Footer />
</main>

<script lang="ts" module>
	const coreValues = [
		{
			name: 'Christ First',
			description: 'Jesus is at the center of everything we do.',
			icon: 'lucide:cross'
		},
		{
			name: 'Family-led',
			description:
				'Our families are empowered, supported, and remain at the heart of the educational journey.',
			icon: 'lucide:heart'
		},
		{
			name: 'Community & Accountability',
			description:
				'Families, students, and staff grow together in an environment that encourages responsibility, growth, and mutual accountability.',
			icon: 'lucide:heart-handshake'
		},
		{
			name: 'Empowered Growth',
			description: 'Our structure gives families freedom, margin, and confidence to thrive.',
			icon: 'lucide:sprout'
		},
		{
			name: 'Educational Excellence',
			description:
				'We blend high academic standards with personalized learning and a Christ-centered view of the whole child.',
			icon: 'lucide:book-open'
		}
	];
</script>

<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';
	import { CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import staff from '$lib/data/staff.json';
	import { cn } from '$lib/utils';
</script>

<main>
	<BrandPageHeader
		eyebrow="About The Village"
		titleBefore="Rooted in Christ. "
		titleAccent="Built on Community."
		description="We are a Christ-centered educational community built to partner with families in a shared approach to learning. Families remain actively involved, students are known, and learning happens in community."
	/>

	<BrandSection>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="font-display text-4xl text-village-navy">Our Core Values</h2>
			<p class="mt-4 text-lg leading-8 text-muted-foreground">
				These fundamental principles guide everything we do and shape the character of our
				community.
			</p>
		</div>

		<ul class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
			{#each coreValues as coreValue (coreValue.name)}
				<BrandCard
					class={cn('row-span-3 grid h-full grid-rows-subgrid p-6', {
						'lg:col-span-2': coreValue.name === 'Educational Excellence'
					})}
				>
					<CardHeader class="contents">
						<div
							class="grid size-16 place-items-center justify-self-center rounded-full bg-village-sage text-village-green"
						>
							<Icon icon={coreValue.icon} class="size-8" />
						</div>
						<CardTitle class="font-display text-center text-2xl text-village-navy">
							{coreValue.name}
						</CardTitle>
						<CardDescription class="text-center leading-6">{coreValue.description}</CardDescription>
					</CardHeader>
				</BrandCard>
			{/each}
		</ul>
	</BrandSection>

	<BrandSection class="border-y border-border bg-village-sage/70">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="font-display text-4xl text-village-navy">Meet Our Leadership</h2>
			<p class="mt-4 text-lg leading-8 text-muted-foreground">
				Our dedicated faculty and staff bring experience, care, and conviction to education.
			</p>
		</div>

		<div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
			{#each staff.filter((s) => s.role === 'Leadership') as s (s.name)}
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
								class="w-fit rounded-full bg-village-paper px-3 py-1 text-center text-xs font-bold tracking-[0.08em] text-village-green uppercase"
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

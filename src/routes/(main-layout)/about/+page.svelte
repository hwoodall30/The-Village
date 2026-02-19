<script module>
	const coreValues = [
		{
			name: 'Christ First',
			description: 'Jesus is at the center of everything we do.',
			icon: 'lucide:fish-symbol'
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
				'Families, students, and staff grow together in a supportive environment that encourages responsibility, growth, and mutual accountability.',
			icon: 'lucide:heart-handshake'
		},
		{
			name: 'Empowered Growth',
			description: 'Our structure provides family with freedom, margin, and confidence to thrive.',
			icon: 'lucide:rocket'
		},
		{
			name: 'Educational Excellence',
			description:
				'We provide high-quality, well-rounded learning that blends the best of homeschool and traditional education, combining high academic standards with personalized learning.',
			icon: 'lucide:book-open'
		}
	];
</script>

<script lang="ts">
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Card, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import staff from '$lib/data/staff.json';
	import Footer from '$lib/components/app/footer.svelte';
	import { cn } from '$lib/utils';
</script>

<main>
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				About <span class="text-blue-500 [view-transition-name:page-header-title]">The Village</span
				>
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				We are a Christ-centered educational community built to partner with families in a shared
				approach to learning. Our model blends the flexibility of homeschooling with the support,
				collaboration, and enrichment of a traditional school setting without taking education out
				of the hands of parents. Families remain actively involved, students are known, and learning
				happens in community.<br /> <br /> Christ shapes our culture, our relationships, and the way we
				walk alongside one another. We value responsibility, growth, and collaboration, and we believe
				education is most effective when families are supported and connected. We exist to provide a sustainable,
				supportive environment where families can homeschool with confidence and children can grow in
				every area of life.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<div class="mx-auto max-w-7xl">
			<h3 class="text-center text-3xl lg:text-4xl">Our Core Values</h3>
			<PageHeaderDescription class="mt-5 text-center">
				These fundemental principles guide everything we do and shape the character of our
				community.
			</PageHeaderDescription>

			<ul class="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
				{#each coreValues as coreValue (coreValue.name)}
					<Card
						class={cn('row-span-3 grid h-full grid-rows-subgrid p-6', {
							'lg:col-span-2': coreValue.name === 'Educational Excellence'
						})}
					>
						<CardHeader class="contents">
							<div
								class="grid h-14 w-14 place-items-center justify-self-center rounded-full border border-blue-600 bg-blue-600/20"
							>
								<Icon icon={coreValue.icon} class="h-8 w-8 text-blue-500" />
							</div>
							<CardTitle class="text-center">{coreValue.name}</CardTitle>
							<CardDescription class="text-center">{coreValue.description}</CardDescription>
						</CardHeader>
					</Card>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border border-t bg-sidebar px-5 py-20">
		<div class="mx-auto max-w-7xl">
			<h3 class="text-center text-3xl lg:text-4xl">Meet Our Leadership</h3>
			<PageHeaderDescription class="mt-5 text-center">
				Our dedicated faculty and staff bring decades of experience and passion to education.
			</PageHeaderDescription>

			<div class="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
				{#each staff.filter((s) => s.role === 'Leadership') as s (s.name)}
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

			<!-- <Button href="/all-staff" variant="outline" class="my-5 w-full"
				>See All Staff <ArrowRight /></Button
			> -->
		</div>
	</div>

	<Footer />
</main>

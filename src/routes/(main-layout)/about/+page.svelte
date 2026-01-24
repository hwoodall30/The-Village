<script module>
	const coreValues = [
		{
			name: 'Faith in Jesus',
			description:
				'We center everything we do on the life and teachings of Jesus Christ, encouraging students to grow in their relationship with Him and live out their faith with integrity.',
			icon: 'lucide:fish-symbol'
		},
		{
			name: 'Family',
			description:
				'We value the strength and support that comes from strong family relationships, partnering with parents to nurture students in love, respect, and shared purpose.',
			icon: 'lucide:heart'
		},
		{
			name: 'Continuous Learning',
			description:
				'We cultivate a lifelong love of learning, inspiring curiosity, critical thinking, and personal growth beyond the classroom.',
			icon: 'lucide:book-open'
		},
		{
			name: 'Community',
			description:
				'We foster a spirit of unity and service, building a caring community where every member feels valued, included, and empowered to make a positive difference.',
			icon: 'lucide:heart-handshake'
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
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<main>
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				About <span class="text-blue-500 [view-transition-name:page-header-title]">The Village</span
				>
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
				tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
				diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
				nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis
				semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque
				congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
				Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue
				blandit sodal
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
					<Card class="row-span-3 grid h-full grid-rows-subgrid p-6">
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
								class="h-[200px] w-[200px] justify-self-center rounded-full border object-cover object-top"
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

			<Button href="/all-staff" variant="outline" class="my-5 w-full"
				>See All Staff <ArrowRight /></Button
			>
		</div>
	</div>

	<Footer />
</main>

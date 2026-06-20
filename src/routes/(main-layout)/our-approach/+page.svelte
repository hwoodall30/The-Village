<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import ProgramList from '$lib/components/app/program-list.svelte';
	import { BrandPageHeader, BrandSection, PillarGrid } from '$lib/components/app/brand';

	let { data } = $props();

	const pillars = [
		{
			title: 'Whole Child Education',
			description: 'Spiritual, academic, emotional, and physical growth are nurtured together.',
			icon: 'lucide:sprout'
		},
		{
			title: 'Small Community',
			description: 'Children learn in a close environment where they are known and valued.',
			icon: 'lucide:hand-heart'
		},
		{
			title: 'Real-World Learning',
			description:
				'Learning is meaningful, practical, and connected to life outside the classroom.',
			icon: 'lucide:mountain'
		},
		{
			title: 'Purposeful Preparation',
			description: 'Students are equipped for wisdom, service, humility, and purpose.',
			icon: 'lucide:compass'
		}
	];
</script>

<main class="grid min-h-full grid-rows-[auto_auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Our Approach"
		titleBefore="Forming Hearts. "
		titleAccent="Inspiring Minds."
		titleAfter=" Equipping for Life."
		description="Our model blends the flexibility of homeschooling with the support, accountability, and enrichment of a Christ-centered learning community."
	/>

	<BrandSection class="bg-village-sage/70 py-10 lg:py-14">
		<PillarGrid items={pillars} iconStyle="circle" />
	</BrandSection>

	<BrandSection>
		<ProgramList programs={data?.programs} />
	</BrandSection>

	<Footer />
</main>

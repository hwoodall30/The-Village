<script lang="ts" module>
	const valuePillars = [
		{
			title: 'Christ-Centered',
			description: 'Christ is at the heart of everything we do.',
			icon: 'ph:cross-bold'
		},
		{
			title: 'Family-Focused',
			description: 'Parents are our partners. We walk together.',
			icon: 'mdi:family'
		},
		{
			title: 'Academically Excellent',
			description: 'Rigorous learning that develops the whole child.',
			icon: 'lucide:book-open'
		},
		{
			title: 'Eternity-Minded',
			description: 'Preparing children not just for this life, but for the next.',
			icon: 'proicons:globe'
		}
	];

	const approachPillars = [
		{
			title: 'Whole Child Education',
			description: 'Nurturing spiritual, academic, emotional, and physical growth in every season.',
			icon: 'lucide:sprout'
		},
		{
			title: 'Small Community',
			description: 'A close-knit environment where every child is known, loved, and valued.',
			icon: 'lucide:hand-heart'
		},
		{
			title: 'Real-World Learning',
			description: 'Learning that is meaningful, practical, and connected to the world around us.',
			icon: 'lucide:mountain'
		},
		{
			title: 'Purposeful Preparation',
			description: 'Equipping students to lead with wisdom, humility, and a Kingdom perspective.',
			icon: 'lucide:compass'
		}
	];
</script>

<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import {
		BrandButton,
		BrandSection,
		CtaBand,
		PhotoFeature,
		PillarGrid
	} from '$lib/components/app/brand';
	import HeroImage from '$lib/assets/home/home-hero.webp';
	import CommunityImage from '$lib/assets/home/home-community.webp';
	import CtaImage from '$lib/assets/home/home-cta.webp';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroImage} type="image/webp" fetchpriority="high" />
</svelte:head>

<main>
	<section
		class="relative min-h-130 overflow-hidden bg-village-navy text-primary-foreground lg:min-h-162.5"
	>
		<img
			loading="eager"
			fetchpriority="high"
			src={HeroImage}
			alt="Children walking toward a chapel-style schoolhouse"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<div
			class="absolute inset-0 bg-linear-to-r from-village-navy/90 via-village-navy/45 to-village-navy/10"
		></div>
		<div class="brand-container relative flex min-h-130 items-center py-20 lg:min-h-162.5">
			<div class="max-w-2xl">
				<h1 class="font-display text-5xl leading-tight text-balance text-white lg:text-7xl">
					Educating for Life.<br />Living for Eternity.
				</h1>
				<p class="mt-6 max-w-xl text-xl leading-8 text-white/90">
					A Christ-centered learning community where children are known, nurtured, and equipped for
					a life of purpose.
				</p>
				<div class="mt-9 flex flex-col gap-4 sm:flex-row">
					<BrandButton href="/about">Learn Our Story</BrandButton>
					<BrandButton href="/contact" tone="light">Schedule a Visit</BrandButton>
				</div>
			</div>
		</div>
	</section>

	<section class="border-b border-border bg-village-paper">
		<div class="brand-container">
			<PillarGrid items={valuePillars} />
		</div>
	</section>

	<BrandSection class="bg-background">
		<PhotoFeature
			eyebrow="Welcome to The Village Collaborative"
			title="Rooted in Christ. Built on Community."
			description="The Village Collaborative exists to partner with families in raising the next generation - spiritually grounded, academically prepared, and equipped to impact the world for God's glory."
			image={CommunityImage}
			alt="Children sitting on a bench beneath a tree"
			href="/about"
			buttonLabel="About Our Mission"
		>
			{#snippet badge()}
				Partnering With Families
			{/snippet}
		</PhotoFeature>
	</BrandSection>

	<BrandSection class="bg-village-sage/70 py-12 lg:py-16">
		<div class="text-center">
			<p class="font-script text-2xl text-village-green">Our Approach</p>
			<h2 class="font-display mt-2 text-3xl leading-tight text-village-navy lg:text-4xl">
				Forming Hearts. Inspiring Minds. Equipping for Life.
			</h2>
		</div>
		<PillarGrid items={approachPillars} iconStyle="circle" class="mt-8" />
	</BrandSection>

	<CtaBand
		image={CtaImage}
		title="Come See the Village Difference"
		label="Schedule a Visit"
		href="/contact"
	/>

	<Footer />
</main>

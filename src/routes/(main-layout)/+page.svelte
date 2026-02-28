<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderImage from '$lib/components/app/page-header/page-header-image.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { ArrowRight } from '@lucide/svelte';
	import HeroImage from '$lib/assets/header-image.webp';
	import VillageLogo from '$lib/assets/icons/the-village-logo.svg';
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroImage} fetchpriority="high" />
	<link rel="preload" as="image" href={VillageLogo} fetchpriority="high" />
</svelte:head>

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper class="bg-transparent">
		<PageHeaderImage src={HeroImage} />
		<PageHeader class="grid grid-rows-[auto_1fr] gap-10 lg:grid-rows-1">
			<div class="grid place-items-center">
				<img
					loading="eager"
					fetchpriority="high"
					class="mb-10 max-w-120 rounded-md p-5 invert dark:invert-0"
					src={VillageLogo}
					alt="Hero"
				/>
			</div>
			<PageHeaderTitle class="text-center text-white text-shadow-neutral-700 text-shadow-xs">
				Welcome to <span class="text-blue-500 [view-transition-name:page-header-title]"
					>The Village</span
				> Homeschool Collaborative</PageHeaderTitle
			>
			<PageHeaderDescription
				class="text-center text-neutral-100 text-shadow-neutral-700 text-shadow-xs dark:text-neutral-300"
			>
				Our vision is to create a Christ-centered educational community where families are empowered
				and learning blends the best of homeschool and traditional school with flexibility and
				collaboration.</PageHeaderDescription
			>
			<div class="mt-8 grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
				<!-- <Button href="/events" class="bg-blue-500 text-sm text-white hover:bg-blue-700"
					>See Events <Icon icon="lucide:calendar" />
				</Button> -->

				<Button
					href="https://schools.mybrightwheel.com/sign-in?redirect_path=/paperwork/sign-ups/b14f6369-7d2b-4078-a88a-7e2d7ffeb9ca/share"
					target="_blank"
					class="bg-blue-500 text-sm text-white hover:bg-blue-700"
					>Register for our Interest Meeting <Icon icon="lucide:calendar" />
				</Button>

				<Button
					href="/resources"
					variant="outline"
					class="dark:hover-text-blue-500 border-blue-600/20 text-sm text-blue-500 backdrop-blur-sm hover:text-blue-700 dark:border-blue-500/20 dark:text-blue-500"
					>See Resources <ArrowRight /></Button
				>
			</div>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="bg-background px-5 py-20">
		<div class="mx-auto grid max-w-7xl">
			<h2 class="text-center text-4xl font-semibold">Our Mission</h2>
			<div class="text-center text-xl leading-relaxed text-muted-foreground">
				We equip families to homeschool with confidence by providing tailored learning, enrichment
				opportunities, and a strong community - so children thrive and parents have margin to
				succeed.
			</div>

			<!-- <ul class="mt-8 grid grid-cols-3 justify-items-center">
				{#each stats as stat (stat.name)}
					<li class="flex flex-col items-center">
						<div
							class="mb-2 grid h-14 w-14 place-items-center rounded-md border shadow"
							style="background: {stat.background}50; border-color: {stat.background}"
						>
							<Icon icon={stat.icon} class="h-6 w-6" style="color: {stat.background}" />
						</div>
						<div class="my-1 text-2xl">{stat.value}</div>
						<p class="text-muted-foreground">{stat.name}</p>
					</li>
				{/each}
			</ul> -->
		</div>
	</div>

	<Footer />
</main>

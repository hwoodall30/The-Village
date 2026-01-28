<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import InterestForm from '$lib/components/app/interest-form.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { ArrowRight } from '@lucide/svelte';
</script>

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper>
		<PageHeader class="grid grid-rows-[auto_1fr] gap-10  lg:grid-rows-1">
			<div class="grid place-items-center">
				<img
					class="mb-10 max-w-120 rounded-md p-5 invert dark:invert-0"
					src="./icons/the-village-logo.svg"
					alt="placeholder"
				/>
			</div>
			<PageHeaderTitle class="text-center">
				Welcome to <span class="text-blue-500 [view-transition-name:page-header-title]"
					>The Village</span
				> Homeschool Collaborative</PageHeaderTitle
			>
			<PageHeaderDescription class="text-center">
				Our vision is to create a Christ-centered educational community where families are empowered
				and learning blends the best of homeschool and traditional school with flexibility and
				collaboration.</PageHeaderDescription
			>
			<div class="mt-8 grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
				<Button
					href="https://docs.google.com/forms/d/e/1FAIpQLSdpbLI-Z8OMF3cFxCiqJNe3IlerqqAj885tbXNsnDW4VAHTYw/viewform"
					target="_blank"
					rel="noreferrer"
					class="bg-blue-500 text-sm text-white hover:bg-blue-700"
					>Interest Form <Icon icon="lucide:form" />
				</Button>

				<Button
					href="/resources"
					variant="outline"
					class="dark:hover-text-blue-500 border-blue-600 text-sm text-blue-500 hover:text-blue-700 dark:border-blue-500 dark:text-blue-500"
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

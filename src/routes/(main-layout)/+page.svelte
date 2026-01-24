<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import InterestForm from '$lib/components/app/interest-form.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Button } from '$lib/components/ui/button';
	import stats from '$lib/data/stats.json';
	import Icon from '@iconify/svelte';
	import { ArrowRight } from '@lucide/svelte';
</script>

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper>
		<PageHeader class="grid grid-rows-[auto_1fr] gap-10 lg:grid-cols-2 lg:grid-rows-1">
			<div>
				<PageHeaderTitle>
					Empowering Futures Through <span
						class="text-blue-500 [view-transition-name:page-header-title]">Acedemic Excellence</span
					></PageHeaderTitle
				>
				<PageHeaderDescription>
					Discover a vibrant community where learning thrives. Join thousands of students who have
					transformed their futures through our innovative programs.</PageHeaderDescription
				>
				<div class="mt-8 flex flex-col gap-2 lg:flex-row">
					<InterestForm
						triggerContent="Join Our Community - Fill out the Interest Form!"
						triggerClass="bg-blue-500 text-sm text-white hover:bg-blue-700"
					/>

					<Button
						href="/resources"
						variant="outline"
						class="dark:hover-text-blue-500 border-blue-600 text-sm text-blue-500 hover:text-blue-700 dark:border-blue-500 dark:text-blue-500"
						>See Resources <ArrowRight /></Button
					>
				</div>
			</div>
			<div class="grid place-items-center">
				<img
					class="h-full w-full rounded-md bg-black p-5 ring ring-neutral-700 invert dark:bg-neutral-950 dark:ring-neutral-700 dark:invert-0"
					src="./icons/the-village-logo.svg"
					alt="placeholder"
				/>
			</div>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="bg-background px-5 py-20">
		<div class="mx-auto grid max-w-7xl">
			<h2 class="text-center text-4xl font-semibold">Our Mission</h2>
			<div class="text-center text-xl leading-relaxed text-muted-foreground">
				We are committed to empowering futures through acedemic excellence.
			</div>

			<ul class="mt-8 grid grid-cols-3 justify-items-center">
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
			</ul>
		</div>
	</div>

	<Footer />
</main>

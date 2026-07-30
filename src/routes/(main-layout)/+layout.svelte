<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/app/header.svelte';
	import SeoHead from '$lib/components/app/seo-head.svelte';
	import { pageSeo, type PageSeo } from '$lib/config/seo';

	let { children } = $props();

	let metadata = $derived(
		(pageSeo[page.url.pathname as keyof typeof pageSeo] ?? pageSeo['/']) as PageSeo
	);
</script>

<SeoHead {...metadata} pathname={page.url.pathname} />

<div class="grid min-h-full grid-rows-[auto_1fr]">
	<Header />
	{@render children?.()}
</div>

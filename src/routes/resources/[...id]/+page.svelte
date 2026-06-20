<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/app/footer.svelte';
	import Header from '$lib/components/app/header.svelte';
	import { BrandButton } from '$lib/components/app/brand';
	import { ArrowLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data?.metadata?.title}</title>
</svelte:head>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<Header />

	<article
		class="prose-headings:font-display mx-auto prose h-full w-full max-w-5xl p-5 py-20 prose-slate prose-headings:text-village-navy prose-a:text-village-green"
	>
		<BrandButton class="my-8" onclick={() => goto(resolve('/parents'))}
			><ArrowLeft /> Back to Resources</BrandButton
		>
		{#if typeof data?.content === 'function'}
			{@render data?.content?.()}
		{:else}
			<div class="text-center text-xs text-muted-foreground">
				<p>Oops, this resource doesn't exist.</p>
			</div>
		{/if}
	</article>

	<Footer />
</main>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Footer from '$lib/components/app/footer.svelte';
	import Header from '$lib/components/app/header.svelte';
	import SeoHead from '$lib/components/app/seo-head.svelte';
	import { BrandButton } from '$lib/components/app/brand';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
	let metadata = $derived(data.metadata);
	let content = $derived(data.content);
</script>

<SeoHead
	title={`${metadata.title} Program | The Village Collaborative`}
	description={metadata.description}
	pathname={`/programs/${metadata.id}`}
	noindex
/>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<Header />

	<article
		class="prose-headings:font-display mx-auto prose h-full w-full max-w-5xl p-5 py-20 prose-slate prose-headings:text-village-navy prose-a:text-village-green"
	>
		<BrandButton class="my-8" onclick={() => goto(resolve('/our-approach'))}
			><ArrowLeft /> Back to Programs</BrandButton
		>
		{#if typeof content === 'function'}
			{@render content?.()}
		{:else}
			<div class="text-center text-xs text-muted-foreground">
				<p>Oops, this blog post doesn't exist.</p>
			</div>
		{/if}
	</article>

	<Footer />
</main>

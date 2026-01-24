<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import Footer from '$lib/components/app/footer.svelte';
	import Header from '$lib/components/app/header.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
	let metadata = $derived(data.metadata);
	let content = $derived(data.content);
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<main class="grid h-full grid-rows-[auto_1fr_auto]">
	<Header />

	<article class="prose dark:prose-invert mx-auto h-full w-full max-w-7xl p-5">
		<Button class="my-8" onclick={() => goto(resolve('/programs'))}
			><ArrowLeft /> Back to Programs</Button
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

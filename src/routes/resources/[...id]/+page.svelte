<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/app/footer.svelte';
	import Header from '$lib/components/app/header.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data?.metadata?.title}</title>
</svelte:head>

<main class="grid h-full grid-rows-[auto_1fr_auto]">
	<Header />

	<article class="prose dark:prose-invert mx-auto h-full w-full max-w-7xl p-5">
		<Button class="my-8" onclick={() => goto(resolve('/resources'))}
			><ArrowLeft /> Back to Resources</Button
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

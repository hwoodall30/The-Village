<script lang="ts">
	import Header from '$lib/components/app/header.svelte';

	let { children } = $props();
</script>

<div class="grid min-h-full grid-rows-[auto_1fr]">
	<Header />
	{@render children?.()}
</div>

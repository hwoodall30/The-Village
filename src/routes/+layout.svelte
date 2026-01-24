<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	onNavigate(() => {
		if (!document.startViewTransition) return;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return new Promise((resolve: any) => {
			document.startViewTransition(() => new Promise(resolve));
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>The Village</title>
</svelte:head>

<ModeWatcher />

{@render children?.()}

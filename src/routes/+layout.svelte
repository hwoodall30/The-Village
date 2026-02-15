<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	onNavigate(() => {
		window.gtag('event', 'page_view', {
			page_path: location.pathname + location.search
		});

		if (!document.startViewTransition) return;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return new Promise((resolve: any) => {
			document.startViewTransition(() => new Promise(resolve));
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="/icons/the-village-icon.svg" />
	<title>The Village</title>
</svelte:head>

<ModeWatcher />

{@render children?.()}

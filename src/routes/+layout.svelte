<script lang="ts">
	import './layout.css';
	import { onNavigate } from '$app/navigation';
	import VillageIcon from '$lib/assets/icons/the-village-icon.svg';

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
	<link rel="icon" href={VillageIcon} />
	<title>The Village</title>
</svelte:head>

{@render children?.()}

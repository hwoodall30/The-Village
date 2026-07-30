<script lang="ts">
	import './layout.css';
	import { onNavigate } from '$app/navigation';
	import { CONTACT_EMAIL, FACEBOOK_URL, SITE_NAME, SITE_URL } from '$lib/config/seo';

	let { children } = $props();

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: SITE_NAME,
		url: SITE_URL,
		logo: new URL('/logo.svg', SITE_URL).href,
		email: CONTACT_EMAIL,
		sameAs: [FACEBOOK_URL]
	};

	onNavigate(() => {
		window.gtag?.('event', 'page_view', {
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
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
	<meta name="theme-color" content="#253e58" />
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>

{@render children?.()}

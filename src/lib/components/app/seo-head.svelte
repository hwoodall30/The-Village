<script lang="ts">
	import HeroImage from '$lib/assets/home/home-hero.png';
	import { SITE_NAME, SITE_URL } from '$lib/config/seo';

	let {
		title,
		description,
		pathname,
		type = 'website',
		noindex = false
	}: {
		title: string;
		description: string;
		pathname: string;
		type?: 'website' | 'article';
		noindex?: boolean;
	} = $props();

	const imageUrl = new URL(HeroImage, SITE_URL).href;
	let canonicalUrl = $derived(new URL(pathname, SITE_URL).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content="Children walking toward The Village Collaborative" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>

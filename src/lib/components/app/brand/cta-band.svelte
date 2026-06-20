<script lang="ts">
	import BrandButton from './brand-button.svelte';

	let { image, title, label, href }: { image: string; title: string; label: string; href: string } =
		$props();
</script>

<section class="relative overflow-hidden bg-village-navy px-5 py-8 text-primary-foreground">
	<img src={image} alt="" class="absolute inset-0 h-full w-full object-cover opacity-25" />
	<div class="absolute inset-0 bg-village-navy/75"></div>
	<div
		class="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"
	>
		<h2 class="font-display text-3xl leading-tight lg:text-4xl">{title}</h2>
		<BrandButton {href} tone="light">{label}</BrandButton>
	</div>
</section>

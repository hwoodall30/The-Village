<script lang="ts">
	import BrandButton from './brand-button.svelte';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		title,
		description,
		image,
		alt,
		href,
		buttonLabel,
		reverse = false,
		badge,
		class: className
	}: {
		eyebrow: string;
		title: string;
		description: string;
		image: string;
		alt: string;
		href?: string;
		buttonLabel?: string;
		reverse?: boolean;
		badge?: Snippet;
		class?: string;
	} = $props();
</script>

<div class={cn('grid items-center gap-12 lg:grid-cols-2', className)}>
	<div class={cn({ 'lg:order-2': reverse })}>
		<p class="brand-eyebrow mb-4">{eyebrow}</p>
		<h2 class="font-display text-4xl leading-tight text-village-navy lg:text-5xl">{title}</h2>
		<div class="my-5 h-px w-16 bg-village-green"></div>
		<p class="max-w-xl leading-8 text-foreground/80">{description}</p>
		{#if href && buttonLabel}
			<BrandButton {href} class="mt-8">{buttonLabel}</BrandButton>
		{/if}
	</div>

	<div class="relative">
		<img
			src={image}
			{alt}
			loading="lazy"
			decoding="async"
			class="aspect-4/3 w-full rounded-t-[45%] object-cover shadow-[0_18px_60px_rgb(8_33_59/0.18)]"
		/>
		{#if badge}
			<div
				class="absolute right-0 bottom-8 hidden size-36 translate-x-1/4 place-items-center rounded-full border-4 border-village-paper bg-village-green p-5 text-center text-[0.65rem] font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-xl lg:grid"
			>
				{@render badge()}
			</div>
		{/if}
	</div>
</div>

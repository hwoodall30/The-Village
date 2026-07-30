<script lang="ts">
	import BrandSection from './brand-section.svelte';
	import { cn } from '$lib/utils';

	let {
		eyebrow,
		titleBefore = '',
		titleAccent = '',
		titleAfter = '',
		description = '',
		class: className
	}: {
		eyebrow?: string;
		titleBefore?: string;
		titleAccent?: string;
		titleAfter?: string;
		description?: string;
		class?: string;
	} = $props();
</script>

<BrandSection class={cn('border-b border-border bg-village-paper py-14 lg:py-20', className)}>
	<div class="mx-auto max-w-4xl text-center">
		{#if eyebrow}
			<p class="brand-eyebrow mb-4">{eyebrow}</p>
		{/if}
		<h1 class="font-display text-4xl leading-tight text-village-navy lg:text-6xl">
			{titleBefore}{#if titleAccent}<span
					class="text-village-green [view-transition-name:page-header-title]">{titleAccent}</span
				>{/if}{titleAfter}
		</h1>
		{#if description}
			<p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
				{description}
			</p>
		{/if}
	</div>
</BrandSection>

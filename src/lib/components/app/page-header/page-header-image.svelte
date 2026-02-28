<script lang="ts">
	import type { WithElementRef } from '$lib/utils';
	import { cn } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLImgAttributes> = $props();

	let isLoading = $state(true);

	function onImageLoad() {
		console.log('test loaded');
		isLoading = false;
	}
</script>

<img
	onload={onImageLoad}
	loading="eager"
	fetchpriority="high"
	class={cn(
		'pointer-events-none absolute inset-0 -z-10 h-full object-cover transition-opacity duration-300',
		{ 'opacity-90 dark:opacity-30': !isLoading },
		{ 'opacity-0 dark:opacity-0': isLoading },
		className
	)}
	bind:this={ref}
	{...restProps}
/>

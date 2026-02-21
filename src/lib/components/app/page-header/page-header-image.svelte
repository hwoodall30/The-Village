<script lang="ts">
	import type { WithElementRef } from '$lib/utils';
	import { cn } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLImgAttributes> = $props();
</script>

<img
	class={cn(
		'pointer-events-none absolute inset-0 -z-10 h-full object-cover opacity-90 dark:opacity-30',
		className
	)}
	bind:this={ref}
	{...restProps}
/>

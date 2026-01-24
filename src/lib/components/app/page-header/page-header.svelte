<script lang="ts">
	import type { WithElementRef } from '$lib/utils';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div class={cn('mx-auto grid max-w-7xl', className)} bind:this={ref} {...restProps}>
	{@render children?.()}
</div>

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

<div
	class={cn('z-0 text-4xl leading-tight font-semibold lg:text-6xl', className)}
	bind:this={ref}
	{...restProps}
>
	{@render children?.()}
</div>

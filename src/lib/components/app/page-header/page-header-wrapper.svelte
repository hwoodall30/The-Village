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
	class={cn('border-b bg-sidebar px-5 py-20 lg:py-32', className)}
	bind:this={ref}
	{...restProps}
>
	{@render children?.()}
</div>

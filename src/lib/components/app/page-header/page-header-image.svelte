<script lang="ts">
	import type { WithElementRef } from '$lib/utils';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLImageElement>> = $props();
</script>

<img
	class={cn('h-[400px] w-full rounded-md object-cover shadow', className)}
	bind:this={ref}
	{...restProps}
/>

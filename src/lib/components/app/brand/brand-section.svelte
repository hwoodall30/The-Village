<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		innerClass,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement> & { innerClass?: string } = $props();
</script>

<section bind:this={ref} class={cn('py-16 lg:py-24', className)} {...restProps}>
	<div class={cn('brand-container', innerClass)}>
		{@render children?.()}
	</div>
</section>

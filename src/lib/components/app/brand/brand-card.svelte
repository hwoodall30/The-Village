<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<Card
	bind:ref
	class={cn('rounded-none border-border/80 bg-card shadow-none', className)}
	{...restProps}
>
	{@render children?.()}
</Card>

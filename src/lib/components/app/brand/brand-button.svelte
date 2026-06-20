<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	type Props = ButtonProps & {
		tone?: 'primary' | 'outline' | 'light';
	};

	let {
		class: className,
		tone = 'primary',
		variant,
		size,
		children,
		...restProps
	}: Props = $props();
</script>

<Button
	{variant}
	{size}
	class={cn(
		'h-11 rounded-none px-7 text-xs font-bold tracking-[0.08em] uppercase shadow-none',
		{
			'border-village-navy bg-village-navy text-white hover:bg-village-navy/90': tone === 'primary',
			'border-village-navy/70 bg-transparent text-village-navy hover:bg-village-navy hover:text-primary-foreground':
				tone === 'outline',
			'border-white/80 bg-transparent text-white hover:bg-white hover:text-village-navy':
				tone === 'light'
		},
		className
	)}
	{...restProps}
>
	{@render children?.()}
</Button>

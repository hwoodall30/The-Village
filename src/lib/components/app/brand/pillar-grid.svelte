<script lang="ts">
	import Icon from '@iconify/svelte';
	import { cn } from '$lib/utils';

	type Pillar = {
		title: string;
		description: string;
		icon: string;
	};

	let {
		items,
		iconStyle = 'line',
		class: className
	}: { items: Pillar[]; iconStyle?: 'line' | 'circle'; class?: string } = $props();
</script>

<ul class={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4', className)}>
	{#each items as item, index (item.title)}
		<li
			class={cn('grid place-items-center px-6 py-9 text-center', {
				'lg:border-l': index > 0
			})}
		>
			<div
				class={cn('mb-5 grid place-items-center text-village-green', {
					'size-16': iconStyle === 'line',
					'size-16 rounded-full bg-village-green text-primary-foreground': iconStyle === 'circle'
				})}
			>
				<Icon icon={item.icon} class="size-10" />
			</div>
			<h3 class="text-sm font-bold tracking-[0.08em] text-village-ink uppercase">{item.title}</h3>
			<p class="mt-3 max-w-52 text-sm leading-6 text-foreground/80">{item.description}</p>
		</li>
	{/each}
</ul>

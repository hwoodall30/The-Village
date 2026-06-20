<script lang="ts" module>
	const navItems = [
		{ name: 'Home', href: '/', match: ['/'] },
		{ name: 'About', href: '/about', match: ['/about'] },
		{ name: 'Our Approach', href: '/our-approach', match: ['/our-approach', '/programs'] },
		{ name: 'Parents', href: '/parents', match: ['/parents', '/resources'] },
		// { name: 'Community', href: '/community', match: ['/community', '/all-staff'] },
		{ name: 'Events', href: '/events', match: ['/events'] },
		{ name: 'Contact', href: '/contact', match: ['/contact'] }
	] as const;
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import type { Attachment } from 'svelte/attachments';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import VillageLogo from '$lib/assets/icons/the-village-logo.svg';
	import { BrandButton } from '$lib/components/app/brand';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let open = $state(false);

	function isActive(match: readonly string[]) {
		return match.some(
			(href) => page.url.pathname === href || page.url.pathname.startsWith(`${href}/`)
		);
	}

	function clickOutsideAttachment(callback: () => void): Attachment {
		return (element) => {
			function handleClick(event: Event) {
				if (!element.contains(event.target as Node)) {
					callback?.();
				}
			}

			document.addEventListener('click', handleClick);

			return () => {
				document.removeEventListener('click', handleClick);
			};
		};
	}
</script>

<header class="sticky top-0 z-30 border-b border-border bg-village-paper/95 backdrop-blur">
	<div class="brand-container flex h-24 items-center justify-between gap-8">
		<a href={resolve('/')} class="shrink-0" aria-label="The Village Collaborative home">
			<img
				src={VillageLogo}
				alt="The Village Collaborative"
				class="h-auto w-44 max-w-[62vw] brightness-0"
			/>
		</a>

		<nav class="hidden items-center gap-8 lg:flex">
			{#each navItems as navItem (navItem.name)}
				<a
					href={resolve(navItem.href)}
					class={cn(
						'text-xs font-bold tracking-widest text-village-navy uppercase transition-colors hover:text-village-green',
						{ 'text-village-green': isActive(navItem.match) }
					)}
				>
					{navItem.name}
				</a>
			{/each}
		</nav>

		<div class="hidden lg:block">
			<BrandButton href="/application">Apply Now</BrandButton>
		</div>

		<Button
			class="lg:hidden"
			onclick={(event) => {
				event.stopPropagation();
				open = !open;
			}}
			variant="outline"
			size="icon"
			aria-label="Toggle navigation"
		>
			<Menu class={cn('size-5 transition-all', { 'scale-0 rotate-90': open })} />
			<X class={cn('absolute size-5 transition-all', { 'scale-0 -rotate-90': !open })} />
		</Button>
	</div>
</header>

{#if open}
	<div
		in:fly={{ y: -16 }}
		out:fly={{ y: -16 }}
		class="fixed inset-x-0 top-24 z-20 border-b border-border bg-village-paper px-5 py-6 shadow-lg lg:hidden"
		{@attach clickOutsideAttachment(() => (open = false))}
	>
		<nav class="mx-auto flex max-w-7xl flex-col gap-4">
			{#each navItems as navItem (navItem.name)}
				<a
					onclick={() => (open = false)}
					href={resolve(navItem.href)}
					class={cn(
						'border-b border-border pb-3 text-sm font-bold tracking-[0.1em] text-village-navy uppercase',
						{ 'text-village-green': isActive(navItem.match) }
					)}
				>
					{navItem.name}
				</a>
			{/each}
			<BrandButton href="/application" onclick={() => (open = false)} class="mt-2 w-full"
				>Apply Now</BrandButton
			>
		</nav>
	</div>
{/if}

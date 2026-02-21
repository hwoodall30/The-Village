<script lang="ts" module>
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Events', href: '/events' },
		{ name: 'Programs', href: '/programs' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Careers', href: '/careers' }
	] as const;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '../ui/button';
	import { toggleMode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { fly } from 'svelte/transition';
	import type { Attachment } from 'svelte/attachments';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let open = $state(false);

	function toggleMobileNav() {
		open = !open;
	}

	function clickOutsideAttachment(callback: () => void): Attachment {
		return (element) => {
			// ts-ignore
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

<header
	class="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 px-5 py-3 backdrop-blur-md"
>
	<a href={resolve('/')} class="flex items-center gap-2">
		<div
			class="grid h-8 w-8 place-items-center rounded-md border border-blue-600 bg-blue-600 font-semibold"
		>
			<img
				src="/icons/the-village-icon.svg"
				alt="The Village Icon"
				class="h-5 w-5 brightness-0 invert"
			/>
		</div>

		The Village
	</a>

	<nav class="hidden lg:grid">
		<div class="relative grid grid-cols-7 divide-x rounded-md border bg-sidebar p-0.5">
			{#each navItems as navItem (navItem.name)}
				{@const isActive =
					navItem.href === '/'
						? page.url.pathname === '/'
						: page.url.pathname.startsWith(navItem.href)}
				<a
					href={resolve(navItem.href)}
					class={cn('relative grid w-full place-items-center px-2 py-0.5 transition-colors', {
						'text-blue-500': isActive
					})}
				>
					{#if isActive}
						<div
							class="pointer-events-none absolute inset-x-1 inset-y-0.5 rounded-md border border-blue-500/30 bg-blue-500/10 lg:[view-transition-name:indicator]"
						></div>
					{/if}
					{navItem.name}
				</a>
			{/each}

			<Button onclick={toggleMode} variant="outline" size="icon" class="ml-3 justify-self-end">
				<SunIcon
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
				/>
				<MoonIcon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>

	<Button
		class="lg:hidden"
		onclick={(e) => {
			e.stopPropagation();
			toggleMobileNav();
		}}
		variant="outline"
		size="icon"
	>
		<Menu
			class={cn('h-[1.2rem] w-[1.2rem] transition-all!', {
				'scale-0 rotate-90': open,
				'scale-100 rotate-0': !open
			})}
		/>
		<X
			class={cn('absolute h-[1.2rem] w-[1.2rem] transition-all!', {
				'scale-100 rotate-0': open,
				'scale-0 -rotate-90': !open
			})}
		/>
		<span class="sr-only"> Mobile Menu </span>
	</Button>
</header>

<!-- Mobile Nav Menu -->
{#if open}
	<div
		in:fly={{ y: -20 }}
		out:fly={{ y: -20 }}
		class="fixed inset-x-0 top-15 z-10 bg-background/70 px-20 py-5 backdrop-blur-md"
		{@attach clickOutsideAttachment(() => (open = false))}
	>
		<nav>
			<div class="flex flex-col items-center gap-3">
				{#each navItems as navItem (navItem.name)}
					{@const isActive =
						navItem.href === '/'
							? page.url.pathname === '/'
							: page.url.pathname.startsWith(navItem.href)}
					<a
						onclick={() => (open = false)}
						href={resolve(navItem.href)}
						class={cn('relative border-b transition-colors hover:text-blue-500', {
							'text-blue-500':
								navItem.href === '/'
									? page.url.pathname === '/'
									: page.url.pathname.startsWith(navItem.href)
						})}
					>
						{navItem.name}

						{#if isActive}
							<div
								class="absolute inset-x-0 bottom-0 h-0.5 w-full rounded-full bg-blue-500 lg:[view-transition-name:indicator]"
							></div>
						{/if}
					</a>
				{/each}

				<Button onclick={toggleMode} variant="outline" class="w-full">
					<SunIcon
						class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
					/>
					<MoonIcon
						class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>
		</nav>
	</div>
{/if}

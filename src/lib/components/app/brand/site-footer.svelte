<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '@iconify/svelte';
	import VillageLogo from '$lib/assets/icons/the-village-logo.svg';

	const quickLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Our Approach', href: '/our-approach' },
		{ label: 'Programs', href: '/programs' },
		{ label: 'Community', href: '/community' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'Contact', href: '/contact' }
	] as const;

	const parentLinks = [
		{ label: 'Apply', href: '/application' },
		{ label: 'Parent Information', href: '/parents' },
		{ label: 'Events', href: '/events' },
		{ label: 'Resources', href: '/resources' }
	] as const;
</script>

<footer class="border-t border-border bg-village-paper">
	<div class="brand-container grid gap-10 py-10 lg:grid-cols-[1.3fr_0.6fr_0.8fr_1.5fr]">
		<a href={resolve('/')} class="block">
			<img src={VillageLogo} alt="The Village Collaborative" class="h-auto w-64 brightness-0" />
		</a>

		<div>
			<h3 class="mb-3 text-xs font-bold tracking-[0.12em] text-village-navy uppercase">
				Quick Links
			</h3>
			<ul class="space-y-1 text-sm">
				{#each quickLinks as link (link.href)}
					<li>
						<a href={resolve(link.href)} class="hover:text-village-green">{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="mb-3 text-xs font-bold tracking-[0.12em] text-village-navy uppercase">
				For Parents
			</h3>
			<ul class="space-y-1 text-sm">
				{#each parentLinks as link (link.href)}
					<li>
						<a href={resolve(link.href)} class="hover:text-village-green">{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="text-center lg:text-left">
			<p class="font-script text-2xl leading-8 text-village-navy">
				Train up a child in the way he should go; even when he is old he will not depart from it
			</p>
			<p class="mt-2 text-xs font-bold tracking-[0.12em] text-village-navy uppercase">
				- Proverbs 22:6
			</p>
			<div class="mt-5 flex justify-center gap-3 lg:justify-start">
				<a
					aria-label="Facebook"
					target="_blank"
					href="https://www.facebook.com/people/The-Village-Collaborative/61585969575739/"
					class="grid size-9 place-items-center rounded-full bg-village-green text-primary-foreground"
				>
					<Icon icon="lucide:facebook" class="size-4" />
				</a>
				<a
					aria-label="Email"
					href="mailto:help@village-collab.org"
					class="grid size-9 place-items-center rounded-full bg-village-green text-primary-foreground"
				>
					<Icon icon="lucide:mail" class="size-4" />
				</a>
			</div>
		</div>
	</div>

	<div class="bg-village-green py-3 text-primary-foreground">
		<div class="brand-container flex flex-col justify-between gap-2 text-xs md:flex-row">
			<p>© 2024 The Village Collaborative. All Rights Reserved.</p>
			<div class="flex gap-5">
				<a href={resolve('/privacy-policy')} class="hover:underline">Privacy Policy</a>
				<a href={resolve('/terms')} class="hover:underline">Terms of Use</a>
			</div>
		</div>
	</div>
</footer>

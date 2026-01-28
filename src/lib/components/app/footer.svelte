<script>
	import Icon from '@iconify/svelte';
	import InterestForm from './interest-form.svelte';
	import { PencilLineIcon } from '@lucide/svelte';
</script>

<footer
	class="grid place-items-center bg-linear-to-br from-blue-600 to-cyan-600 py-5 text-white lg:py-16 dark:from-blue-800 dark:to-cyan-800"
>
	<div class="mx-auto max-w-7xl px-5">
		<div class="mb-5 text-center text-lg font-bold sm:text-3xl">Stay Connected</div>

		<div class="my-8 grid grid-cols-3 justify-items-center gap-x-12 gap-y-8 px-5">
			<a
				href="mailto:villagecommunitycollab@gmail.com"
				class="rounded-md border border-orange-500/50 bg-linear-to-br from-orange-600/20 to-yellow-600/20 p-2"
			>
				<Icon icon="lucide:mail" class="h-4 w-4 text-orange-400 sm:h-5 sm:w-5" />
			</a>

			<a
				target="_blank"
				href="https://www.facebook.com/people/The-Village-Collaborative/61585969575739/"
				class="rounded-md border border-blue-400/50 bg-linear-to-br from-cyan-700/20 to-blue-700/20 p-2 dark:border-blue-500/50 dark:from-cyan-600/20 dark:to-blue-600/20"
			>
				<Icon icon="lucide:facebook" class="h-4 w-4 text-blue-400 sm:h-5 sm:w-5 " />
			</a>

			<a
				target="_blank"
				href="https://maps.app.goo.gl/waCCPocKkGA2ckMp8"
				class="rounded-md border border-green-500/50 bg-linear-to-br from-green-600/20 to-emerald-600/20 p-2"
			>
				<Icon icon="lucide:map-pin" class="h-4 w-4 text-emerald-500 sm:h-5 sm:w-5" />
			</a>
		</div>

		<InterestForm
			triggerClass="w-full bg-white text-black dark:text-black dark:bg-white dark:text-black hover:bg-white/80 dark:hover:bg-white/80"
		>
			{#snippet triggerContent()}
				<PencilLineIcon /> Interest Form
			{/snippet}
		</InterestForm>
	</div>
</footer>

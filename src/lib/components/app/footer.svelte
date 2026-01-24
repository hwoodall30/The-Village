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
			<Icon icon="lucide:mail" class="h-5 w-5 sm:h-8 sm:w-8" />

			<Icon icon="lucide:facebook" class="h-5 w-5 sm:h-8 sm:w-8" />

			<Icon icon="lucide:map-pin" class="h-5 w-5 sm:h-8 sm:w-8" />
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

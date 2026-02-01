<script>
	import Icon from '@iconify/svelte';
</script>

<footer
	class="relative grid place-items-center bg-linear-to-br from-blue-600 to-cyan-600 py-5 text-white lg:py-10 dark:from-blue-800 dark:to-cyan-800"
>
	<div class="mx-auto max-w-7xl px-5">
		<div class="mb-5 text-center text-lg font-bold sm:text-3xl">Stay Connected</div>

		<div class="flex w-full justify-center gap-5 px-5">
			<a
				href="mailto:villagecommunitycollab@gmail.com"
				class="rounded-md border border-orange-500/50 bg-linear-to-br from-orange-600/20 to-yellow-600/20 p-2"
			>
				<Icon icon="lucide:mail" class="h-4 w-4 text-orange-400 sm:h-5 sm:w-5" />
			</a>

			<a
				target="_blank"
				href="https://www.facebook.com/people/The-Village-Collaborative/61585969575739/"
				class="rounded-md border border-blue-400/60 bg-linear-to-br from-cyan-700/20 to-blue-700/30 p-2 dark:border-blue-500/50 dark:from-cyan-600/20 dark:to-blue-600/20"
			>
				<Icon
					icon="lucide:facebook"
					class="h-4 w-4 text-blue-300 sm:h-5 sm:w-5 dark:text-blue-400 "
				/>
			</a>

			<!-- <a
				target="_blank"
				href="https://maps.app.goo.gl/waCCPocKkGA2ckMp8"
				class="rounded-md border border-green-500/50 bg-linear-to-br from-green-600/20 to-emerald-600/20 p-2"
			>
				<Icon icon="lucide:map-pin" class="h-4 w-4 text-emerald-500 sm:h-5 sm:w-5" />
			</a> -->
		</div>
	</div>
</footer>

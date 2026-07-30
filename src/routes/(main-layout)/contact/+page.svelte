<script>
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandButton, BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';
	import { CardContent } from '$lib/components/ui/card';
	import { Mail } from '@lucide/svelte';
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Contact"
		titleBefore="Contact "
		titleAccent="Us"
		description="Have a question or concern? Send us an email and we will get back to you as soon as possible."
	/>

	<BrandSection>
		<BrandCard class="mx-auto max-w-3xl">
			<CardContent class="flex flex-col items-center text-center">
				<Mail class="mb-5 size-10 text-village-green" />
				<p class="mb-5 text-muted-foreground">
					Click below to open your email app and write to
					<a class="font-medium text-village-navy underline" href="mailto:help@village-collab.org">
						help@village-collab.org
					</a>.
				</p>
				<BrandButton href="mailto:help@village-collab.org" class="w-full">
					Email Us <Mail />
				</BrandButton>
			</CardContent>
		</BrandCard>
	</BrandSection>

	<Footer />
</main>

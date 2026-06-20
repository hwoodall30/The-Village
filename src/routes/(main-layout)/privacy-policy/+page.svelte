<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandPageHeader, BrandSection } from '$lib/components/app/brand';
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Policies"
		titleBefore="Privacy "
		titleAccent="Policy"
		description="This page is reserved for The Village Collaborative's privacy policy."
	/>

	<BrandSection>
		<div
			class="prose-headings:font-display mx-auto prose max-w-3xl prose-slate prose-headings:text-village-navy"
		>
			<p>
				Privacy policy content can be added here when it is ready. For questions about how your
				information is handled, please contact The Village Collaborative directly.
			</p>
		</div>
	</BrandSection>

	<Footer />
</main>

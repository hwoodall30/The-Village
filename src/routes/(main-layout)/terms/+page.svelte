<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandPageHeader, BrandSection } from '$lib/components/app/brand';
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Policies"
		titleBefore="Terms of "
		titleAccent="Use"
		description="This page is reserved for The Village Collaborative's terms of use."
	/>

	<BrandSection>
		<div
			class="prose-headings:font-display mx-auto prose max-w-3xl prose-slate prose-headings:text-village-navy"
		>
			<p>
				Terms of use content can be added here when it is ready. For questions about site usage,
				please contact The Village Collaborative directly.
			</p>
		</div>
	</BrandSection>

	<Footer />
</main>

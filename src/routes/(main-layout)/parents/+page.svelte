<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import ResourceList from '$lib/components/app/resource-list.svelte';
	import { BrandPageHeader, BrandSection } from '$lib/components/app/brand';

	let { data } = $props();
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="For Parents"
		titleBefore="Partnering With "
		titleAccent="Families"
		description="Helpful resources, admissions information, and parent-facing updates for families walking with The Village Collaborative."
	/>

	<BrandSection>
		<ResourceList resources={data?.resources} />
	</BrandSection>

	<Footer />
</main>

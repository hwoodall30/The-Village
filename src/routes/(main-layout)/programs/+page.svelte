<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import ProgramList from '$lib/components/app/program-list.svelte';
	import { BrandPageHeader, BrandSection } from '$lib/components/app/brand';

	let { data } = $props();
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Our Approach"
		titleBefore="School "
		titleAccent="Programs"
		description="See what programs we offer and how each learning experience supports the whole child."
	/>

	<BrandSection>
		<ProgramList programs={data?.programs} />
	</BrandSection>

	<Footer />
</main>

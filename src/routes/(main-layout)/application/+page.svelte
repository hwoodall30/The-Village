<script lang="ts">
	import Footer from '$lib/components/app/footer.svelte';
	import { Alert } from '$lib/components/ui/alert';
	import AlertDescription from '$lib/components/ui/alert/alert-description.svelte';
	import {
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { CircleAlert, CircleCheck, ExternalLink, User, Users } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { BrandButton, BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';

	let selected = $state<'single' | 'multi'>('single');
	let isStepOneComplete = $state(false);

	function handleChangeSelection(type: 'single' | 'multi') {
		selected = type;
	}

	function setStepOneComplete() {
		localStorage.setItem('isStepOneComplete', 'true');
		isStepOneComplete = true;
	}

	onMount(() => {
		isStepOneComplete = localStorage.getItem('isStepOneComplete') === 'true';
	});
</script>

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Admissions"
		titleAccent="Application"
		titleAfter=" Instructions"
		description="Please follow the option that best fits your family."
	/>

	<BrandSection>
		<div class="mx-auto grid max-w-2xl place-items-center">
			<Alert class="mb-10 rounded-none border-village-gold/40 bg-village-gold/10 text-village-navy">
				<CircleAlert />
				<AlertDescription class="text-village-navy"
					>Reminder: There is a $100 application fee per family. Following the correct instructions
					below ensures your family is only charged once.</AlertDescription
				>
			</Alert>

			<p class="font-display text-2xl text-village-navy">How many children are you applying?</p>

			<div class="mt-5 mb-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
				<BrandCard
					class={cn('group cursor-pointer transition-all', {
						'ring-2 ring-village-green': selected === 'single'
					})}
					onclick={() => handleChangeSelection('single')}
				>
					<CardContent class="grid place-items-center">
						<div
							class={cn(
								'mb-5 grid size-14 place-items-center rounded-full bg-village-sage text-village-green transition-colors group-hover:bg-village-green group-hover:text-primary-foreground',
								{
									'bg-village-green p-3 text-primary-foreground': selected === 'single'
								}
							)}
						>
							<User />
						</div>

						<p
							class="text-center text-sm font-bold tracking-[0.08em] text-village-navy uppercase md:text-base"
						>
							One Child
						</p>

						<p class="mt-2 text-center text-xs text-muted-foreground">
							Single child application process
						</p>
					</CardContent>
				</BrandCard>

				<BrandCard
					class={cn('group cursor-pointer transition-all', {
						'ring-2 ring-village-green': selected === 'multi'
					})}
					onclick={() => handleChangeSelection('multi')}
				>
					<CardContent class="grid place-items-center">
						<div
							class={cn(
								'mb-5 grid size-14 place-items-center rounded-full bg-village-sage text-village-green transition-colors group-hover:bg-village-green group-hover:text-primary-foreground',
								{
									'bg-village-green p-3 text-primary-foreground': selected === 'multi'
								}
							)}
						>
							<Users />
						</div>

						<p
							class="text-center text-sm font-bold tracking-[0.08em] text-village-navy uppercase md:text-base"
						>
							Two or More Children
						</p>

						<p class="mt-2 text-center text-xs text-muted-foreground">
							Multi-child application steps
						</p>
					</CardContent>
				</BrandCard>
			</div>

			<div class="w-full">
				{#if selected === 'single'}
					<div in:fly={{ y: 20 }}>
						<BrandCard>
							<CardHeader>
								<CardTitle class="font-display flex items-center gap-2 text-2xl text-village-navy"
									><CircleCheck class="size-5 text-village-green" /> Applying One Child</CardTitle
								>
								<CardDescription
									>Click the button below to open the application form. Complete all required fields
									to finish your registration.</CardDescription
								>
							</CardHeader>

							<CardContent>
								<BrandButton
									href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/a90573c0-3ee4-4c60-bdf8-00a2e7f53a37/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
									target="_blank"
									class="w-full">Start Application <ExternalLink /></BrandButton
								>
							</CardContent>
						</BrandCard>
					</div>
				{:else}
					<div in:fly={{ y: 20 }}>
						<BrandCard>
							<CardHeader>
								<CardTitle class="font-display flex items-center gap-2 text-2xl text-village-navy"
									><CircleCheck class="size-5 text-village-green" /> Applying Two or More Children</CardTitle
								>
								<CardDescription
									>Follow these steps in order to ensure your family is charged only one application
									fee.</CardDescription
								>
							</CardHeader>

							<CardContent class="px-2">
								<div class="border border-border bg-village-paper p-6">
									<div>
										<CardTitle
											class="font-display flex items-center gap-2 text-xl text-village-navy"
										>
											<div
												class="grid size-8 place-items-center rounded-full bg-village-sage font-semibold text-village-green"
											>
												1
											</div>
											Apply Your First Child</CardTitle
										>
										<CardDescription
											>Complete the full application for your first child using the link below.</CardDescription
										>
									</div>

									<div class="mt-5">
										<BrandButton
											onclick={setStepOneComplete}
											href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/a90573c0-3ee4-4c60-bdf8-00a2e7f53a37/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
											target="_blank"
											class="w-full">First Child Application <ExternalLink /></BrandButton
										>
									</div>
								</div>

								<div
									class={cn('mt-3 border border-border bg-village-paper p-6', {
										'pointer-events-none opacity-30': !isStepOneComplete
									})}
								>
									<div>
										<CardTitle
											class="font-display flex items-center gap-2 text-xl text-village-navy"
										>
											<div
												class="grid size-8 place-items-center rounded-full bg-village-sage font-semibold text-village-green"
											>
												2
											</div>
											Apply Remaining Children</CardTitle
										>
										<CardDescription
											>After completing step 1, use this link to enroll your remaining children
											without paying additional fees. You will have to complete this for each
											remaining child.</CardDescription
										>
									</div>

									<div class="mt-5">
										<BrandButton
											href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/674b7ff6-7427-4282-8e08-5f9a8ce35147/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
											target="_blank"
											class="w-full">Remaining Children Application <ExternalLink /></BrandButton
										>
									</div>
								</div>
							</CardContent>

							<CardFooter class="px-2">
								<Alert class="rounded-none">
									<CircleAlert />
									<AlertDescription
										>Important: You must complete the first application before starting the second.
										This ensures your family is only charged the single $100 application fee.</AlertDescription
									>
								</Alert>
							</CardFooter>
						</BrandCard>
					</div>
				{/if}
			</div>
		</div>
	</BrandSection>

	<Footer />
</main>

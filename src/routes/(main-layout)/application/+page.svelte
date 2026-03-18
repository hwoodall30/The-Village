<script lang="ts">
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import Footer from '$lib/components/app/footer.svelte';
	import { Alert } from '$lib/components/ui/alert';
	import AlertTitle from '$lib/components/ui/alert/alert-title.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { CircleAlert, CircleCheck, ExternalLink, User, Users } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AlertDescription from '$lib/components/ui/alert/alert-description.svelte';

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

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				<span class="text-blue-500 [view-transition-name:page-header-title]">Application</span> Instructions
			</PageHeaderTitle>
			<PageHeaderDescription class="text-center">
				Please follow the option that best fits your family.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<div class="mx-auto grid max-w-2xl place-items-center">
			<Alert
				class="mb-10 border-orange-500/30 bg-orange-500/10 text-orange-500 dark:text-orange-500"
			>
				<CircleAlert />
				<AlertDescription class="text-orange-500"
					>Reminder: There is a $100 application fee per family. Following the correct instructions
					below ensures your family is only charged once.</AlertDescription
				>
			</Alert>

			<p class="text-xl">How many children are you applying?</p>

			<div class="mt-5 mb-5 grid w-full grid-cols-2 gap-10">
				<Card
					class={cn({ 'ring-2 ring-blue-500': selected === 'single' }, 'transition-all')}
					onclick={() => handleChangeSelection('single')}
				>
					<CardContent class="grid place-items-center">
						<div
							class="mb-5 grid size-14 place-items-center rounded-full bg-blue-500 p-3 text-white"
						>
							<User />
						</div>

						<p class="text-xl font-semibold">One Child</p>

						<p class="mt-2 text-xs text-muted-foreground">Single child application process</p>
					</CardContent>
				</Card>

				<Card
					class={cn({ 'ring-2 ring-blue-500': selected === 'multi' }, 'transition-all')}
					onclick={() => handleChangeSelection('multi')}
				>
					<CardContent class="grid place-items-center">
						<div
							class="mb-5 grid size-14 place-items-center rounded-full bg-blue-500 p-3 text-white"
						>
							<Users />
						</div>

						<p class="text-xl font-semibold">Two or More Children</p>

						<p class="mt-2 text-xs text-muted-foreground">Multi-child application steps</p>
					</CardContent>
				</Card>
			</div>

			<div class="w-full">
				{#if selected === 'single'}
					<div in:fly={{ y: 20 }}>
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center gap-2"
									><CircleCheck class="size-5 text-emerald-500" /> Applying One Child</CardTitle
								>
								<CardDescription
									>Click the button below to open the application form. Complete all required fields
									to finish your registration.</CardDescription
								>
							</CardHeader>

							<CardContent>
								<Button
									href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/a90573c0-3ee4-4c60-bdf8-00a2e7f53a37/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
									target="_blank"
									class="w-full bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-600 "
									>Start Application <ExternalLink /></Button
								>
							</CardContent>
						</Card>
					</div>
				{:else}
					<div in:fly={{ y: 20 }}>
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center gap-2"
									><CircleCheck class="size-5 text-emerald-500" /> Applying Two or More Children</CardTitle
								>
								<CardDescription
									>Follow these steps in order to ensure your family is charged only one application
									fee.</CardDescription
								>
							</CardHeader>

							<CardContent>
								<Card>
									<CardHeader>
										<CardTitle class="flex items-center gap-2">
											<div
												class="grid size-8 place-items-center rounded-full bg-neutral-100 font-semibold dark:bg-neutral-800"
											>
												1
											</div>
											Apply Your First Child</CardTitle
										>
										<CardDescription
											>Complete the full application for your first child using the link below.</CardDescription
										>
									</CardHeader>

									<CardContent>
										<Button
											onclick={setStepOneComplete}
											href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/a90573c0-3ee4-4c60-bdf8-00a2e7f53a37/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
											target="_blank"
											class="w-full bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-600 "
											>First Child Application <ExternalLink /></Button
										>
									</CardContent>
								</Card>

								<Card class={cn('mt-3', { 'pointer-events-none opacity-30': !isStepOneComplete })}>
									<CardHeader>
										<CardTitle class="flex items-center gap-2">
											<div
												class="grid size-8 place-items-center rounded-full bg-neutral-100 font-semibold dark:bg-neutral-800"
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
									</CardHeader>

									<CardContent>
										<Button
											href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/674b7ff6-7427-4282-8e08-5f9a8ce35147/fill?school_id=3ac671b7-8fa7-4426-a881-cea74913544c"
											target="_blank"
											class="w-full bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-600 "
											>Remaining Children Application <ExternalLink /></Button
										>
									</CardContent>
								</Card>
							</CardContent>

							<CardFooter>
								<Alert>
									<CircleAlert />
									<AlertDescription
										>Important: You must complete the first application before starting the second.
										This ensures your family is only charged the single $100 application fee.</AlertDescription
									>
								</Alert>
							</CardFooter>
						</Card>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<Footer />
</main>

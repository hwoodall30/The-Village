<script lang="ts">
	import EventCalendar from '$lib/components/app/event-calendar.svelte';
	import Footer from '$lib/components/app/footer.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import events from '$lib/data/events.json';
	import type { Event } from '$lib/types/events';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { Clock, MapPin, Users } from '@lucide/svelte';
	import { SvelteDate } from 'svelte/reactivity';

	let sortedEvents = $derived(
		(events as Event[]).sort(
			(a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
		)
	);

	let sortedAndFilteredEvents = $derived.by(() => {
		if (!sortedEvents) return [];

		const now = new SvelteDate();
		now.setHours(0, 0, 0, 0);

		const thirtyDaysFromNow = new SvelteDate(now);
		thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

		return sortedEvents.filter((event) => {
			const startTime = new Date(event.start_time);
			return startTime >= now && startTime <= thirtyDaysFromNow;
		});
	});
</script>

<main class="grid">
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center">
				Our <span class="text-blue-500 [view-transition-name:page-header-title]">Events</span>
			</PageHeaderTitle>

			<PageHeaderDescription class="text-center">
				Stay connected with our school community through upcoming events, performances, and
				important dates throughout the academic year.
			</PageHeaderDescription>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<div class="mx-auto max-w-7xl">
			<h3 class="text-center text-3xl lg:text-4xl">Upcoming Events</h3>
			<PageHeaderDescription class="mt-5 text-center">
				Mark your calendars for these exciting events and important dates coming up.
			</PageHeaderDescription>

			{#if sortedAndFilteredEvents?.length <= 0}
				<div class="my-10 grid place-items-center text-xs text-muted-foreground">
					<Icon icon="heroicons:calendar" class="mb-2 h-5 w-5 text-center" /> No events yet this month.
					Check back later.
				</div>
			{:else}
				<div class="relative -z-1 mt-10 flex w-full flex-col items-center">
					<div
						class="absolute inset-y-0 left-1/2 hidden h-full w-0.75 -translate-x-1/2 rounded-full bg-blue-600/50 lg:block"
					></div>
					{#each sortedAndFilteredEvents as event, i (event.title + i)}
						{@const isEven = i % 2 === 0}
						{@const isOdd = i % 2 !== 0}
						{@const startTimeHourMinute = new Date(event.start_time).toLocaleTimeString('en-US', {
							timeZone: 'America/New_York',
							hour: 'numeric',
							minute: '2-digit',
							hour12: true
						})}
						{@const endTimeHourMinute = new Date(event.end_time).toLocaleTimeString('en-US', {
							timeZone: 'America/New_York',
							hour: 'numeric',
							minute: '2-digit',
							hour12: true
						})}

						{@const startTimeDate = new Date(event.start_time).toLocaleDateString('en-US', {
							timeZone: 'America/New_York',
							month: 'short',
							day: 'numeric'
						})}

						{@const endTimeDate = new Date(event.end_time).toLocaleDateString('en-US', {
							timeZone: 'America/New_York',
							month: 'short',
							day: 'numeric'
						})}

						{@const startTimeYear = new Date(event.start_time).toLocaleDateString('en-US', {
							timeZone: 'America/New_York',
							year: 'numeric'
						})}
						<div class="event-card grid w-full grid-cols-1 lg:grid-cols-2">
							<div
								class={cn('pb-5 lg:pb-10', {
									'lg:order-2 lg:pl-5': isOdd,
									'lg:pr-5': isEven
								})}
							>
								<Card>
									<CardHeader class="flex items-center justify-between">
										<div>
											<CardTitle class="mb-2">{event.title}</CardTitle>
											<CardDescription>{event.description}</CardDescription>
										</div>
										<div class="flex h-full flex-col justify-start whitespace-nowrap">
											<p class="text-lg font-semibold">
												{startTimeDate}
											</p>
											<p class="text-xs text-muted-foreground">
												{startTimeYear}
											</p>
										</div>
									</CardHeader>
									<CardContent class="flex flex-col gap-2">
										<div class="flex items-center gap-2 text-xs text-muted-foreground">
											<Clock class="h-4 w-4" />
											{startTimeDate}
											{startTimeHourMinute} - {endTimeDate}
											{endTimeHourMinute}
										</div>

										{#if event.location}
											<div class="flex items-center gap-2 text-xs text-muted-foreground">
												<MapPin class="h-4 w-4" />
												{event.location}
											</div>
										{/if}
										{#if event.attendees}
											<div class="flex items-center gap-2 text-xs text-muted-foreground">
												<Users class="h-4 w-4" />
												{event.attendees}
											</div>
										{/if}
									</CardContent>
								</Card>
							</div>

							<div
								class={cn('hidden items-center pb-10 lg:grid', {
									'lg:order-1': isOdd,
									'': isEven
								})}
							>
								<div
									class={cn('relative', {
										'pr-5 text-end': isOdd,
										'pl-5': isEven
									})}
								>
									<div
										class={cn(
											'absolute top-1/2 grid h-5 w-5 -translate-y-1/2 rounded-full bg-background p-1 shadow',
											{
												'right-0 translate-x-1/2 ': isOdd,
												'left-0 -translate-x-1/2': isEven
											}
										)}
									>
										<div class="rounded-full bg-blue-600"></div>
									</div>
									<div>
										<div class="text-2xl font-bold text-blue-500">
											{new Date(event.start_time).toLocaleDateString('en-US', {
												month: 'long',
												day: 'numeric',
												year: 'numeric'
											})}
										</div>
										<div class="text-muted-foreground">
											{new Date(event.start_time).toLocaleDateString('en-US', {
												weekday: 'long'
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/if}

			<Separator class="my-10" />

			<div class="w-full max-w-7xl">
				<div class="mx-auto my-5 w-fit">See all events</div>
				<EventCalendar class="mx-auto w-full" {events} />
			</div>
		</div>
	</div>

	<Footer />
</main>

<style>
	.event-card {
		@supports (animation-timeline: view()) {
			animation: fadeIn both;
			animation-timeline: view();
			animation-range: entry 0% cover 20%;

			@media (min-width: 64rem) {
				animation: fadeAndSlideIn both;
				animation-timeline: view();
				animation-range: entry 0% cover 20%;
			}
		}
	}

	@keyframes fadeAndSlideIn {
		from {
			translate: 0px 400px;
			scale: 0.7;
			opacity: 0;
		}

		to {
			translate: 0px 0px;
			scale: 1;
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			scale: 0.9;
			opacity: 0;
		}

		to {
			scale: 1;
			opacity: 1;
		}
	}
</style>

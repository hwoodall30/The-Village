<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { CalendarDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import type { Event } from '$lib/types/events';
	import { formatDateRange } from 'little-date';
	import { SvelteDate } from 'svelte/reactivity';
	import type { WithElementRef } from '$lib/utils';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		events,
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		events: Event[];
	} = $props();

	let value = $state<DateValue | undefined>(
		new CalendarDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
	);

	let filteredEvents = $derived.by(() => {
		if (!value) return [];

		const selectedDate = value.toDate(getLocalTimeZone());
		selectedDate.setHours(0, 0, 0, 0);
		const selectedTime = selectedDate.getTime();

		return events.filter((event) => {
			// Get start and end dates for the event
			const eventStart = new SvelteDate(event.start_time);
			eventStart.setHours(0, 0, 0, 0);
			const startTime = eventStart.getTime();

			const eventEnd = new SvelteDate(event.end_time);
			eventEnd.setHours(23, 59, 59, 999);
			const endTime = eventEnd.getTime();

			return selectedTime >= startTime && selectedTime <= endTime;
		});
	});
</script>

<Card.Root class={cn('w-fit py-4', className)} {...restProps}>
	<Card.Content class="px-4">
		<Calendar
			type="single"
			bind:value
			class="bg-transparent p-0 [--cell-size:--spacing(9)] md:[--cell-size:--spacing(14)]"
			preventDeselect
		/>
	</Card.Content>
	<Card.Footer class="flex flex-col items-start gap-3 border-t px-4 pt-4!">
		<div class="flex w-full items-center justify-between px-1">
			<div class="text-sm font-medium">
				{value?.toDate(getLocalTimeZone()).toLocaleDateString('en-US', {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})}
			</div>
		</div>
		<div class="flex w-full flex-col gap-2">
			{#if filteredEvents?.length > 0}
				{#each filteredEvents as event (event.title)}
					<div
						class="relative rounded-md bg-muted p-2 ps-6 text-sm after:absolute after:inset-y-2 after:start-2 after:w-1 after:rounded-full after:bg-primary/70"
					>
						<div class="font-medium">{event.title}</div>
						<div class="text-xs text-muted-foreground">
							{formatDateRange(new Date(event.start_time), new Date(event.end_time))}
						</div>
					</div>
				{/each}
			{:else}
				<p class="ml-1 text-xs text-muted-foreground">No events today</p>
			{/if}
		</div>
	</Card.Footer>
</Card.Root>

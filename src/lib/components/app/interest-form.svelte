<script module lang="ts">
	const gradeLevels = [
		{ label: 'Kindergarten', value: 'kindergarten' },
		{ label: 'Grade 1', value: 'grade1' },
		{ label: 'Grade 2', value: 'grade2' },
		{ label: 'Grade 3', value: 'grade3' },
		{ label: 'Grade 4', value: 'grade4' },
		{ label: 'Grade 5', value: 'grade5' },
		{ label: 'Grade 6', value: 'grade6' },
		{ label: 'Grade 7', value: 'grade7' },
		{ label: 'Grade 8', value: 'grade8' },
		{ label: 'Grade 9 (Freshman)', value: 'grade9' },
		{ label: 'Grade 10 (Sophomore)', value: 'grade10' },
		{ label: 'Grade 11 (Junior)', value: 'grade11' },
		{ label: 'Grade 12 (Senior)', value: 'grade12' }
	];

	const howDidYouHearOptions = [
		{ label: 'Social Media', value: 'socialMedia' },
		{ label: 'Friend', value: 'friend' },
		{ label: 'Other', value: 'other' }
	];
</script>

<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { SendHorizontalIcon, Trash2, X } from '@lucide/svelte';
	import { Plus } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import { flip } from 'svelte/animate';

	let {
		triggerClass,
		triggerContent,
		triggerVariant = 'default'
	}: {
		triggerClass?: string;
		triggerContent?: string | Snippet;
		triggerVariant?:
			| 'link'
			| 'default'
			| 'destructive'
			| 'outline'
			| 'secondary'
			| 'ghost'
			| undefined;
	} = $props();

	let isOpen = $state(false);

	let interestForm = $state({
		studenInformation: [
			{
				id: crypto.randomUUID(),
				name: '',
				gradeLevel: ''
			}
		],
		guardianInformation: {
			name: '',
			email: '',
			phone: ''
		},
		additionalInfo: {
			questions: '',
			message: '',
			howDidYouHear: ''
		}
	});

	function addStudent() {
		interestForm.studenInformation.push({
			id: crypto.randomUUID(),
			name: '',
			gradeLevel: ''
		});
	}

	function removeStudent(id: string) {
		interestForm.studenInformation = interestForm.studenInformation.filter(
			(studentInformation) => studentInformation.id !== id
		);
	}

	function closeDialog() {
		isOpen = false;
	}
</script>

<Dialog bind:open={isOpen}>
	<DialogTrigger
		class={cn(
			buttonVariants({ variant: triggerVariant }),
			'h-fit whitespace-break-spaces',
			triggerClass
		)}
	>
		{#if typeof triggerContent === 'string'}
			{triggerContent}
		{:else}
			{@render triggerContent?.()}
		{/if}
	</DialogTrigger>
	<input type="text" name="_honey" style="display:none" />

	<DialogContent class="max-h-[75dvh] overflow-y-auto">
		<form action="https://formsubmit.co/hwoodall3002@gmail.com" method="POST" class="contents">
			<DialogHeader>
				<DialogTitle>Interest Form</DialogTitle>
				<DialogDescription
					>Please fill out this form to show your interest in our school.</DialogDescription
				>
			</DialogHeader>
			<Card>
				<CardHeader class="flex items-center gap-1">
					<Icon icon="lucide:user" />
					Student Information
				</CardHeader>
				<CardContent class="flex flex-col gap-4">
					{#each interestForm.studenInformation as studentInformation, index (studentInformation.id)}
						<div animate:flip={{ duration: 300 }} class="mt-5 flex flex-col gap-4 first:mt-0">
							<div>
								<div class="flex items-end justify-between">
									<Label class="mb-1">Student Name</Label>
									{#if interestForm.studenInformation?.length > 1}
										<Button
											onclick={() => removeStudent(studentInformation.id)}
											size="icon"
											variant="ghost"
											class="mb-3"><Trash2 class="h-3 w-3 text-destructive" /></Button
										>
									{/if}
								</div>
								<Input
									placeholder="Enter Student's Name..."
									bind:value={studentInformation.name}
									name={`student_name_${index}`}
								/>
							</div>
							<div>
								<Label class="mb-1">Current Grade Level</Label>
								<Select
									type="single"
									bind:value={studentInformation.gradeLevel}
									name={`student_grade_level_${index}`}
								>
									<SelectTrigger class="w-full"
										>{gradeLevels.find(
											(gradeLevel) => gradeLevel.value === studentInformation.gradeLevel
										)?.label || 'Select a Grade Level'}</SelectTrigger
									>
									<SelectContent class="w-full">
										{#each gradeLevels as gradeLevel (gradeLevel.value)}
											<SelectItem value={gradeLevel.value}>{gradeLevel.label}</SelectItem>
										{/each}
									</SelectContent>
								</Select>
							</div>
						</div>
					{/each}
					<Button onclick={addStudent} variant="ghost"><Plus /> Add Another Student</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex items-center gap-1">
					<Icon icon="lucide:mail" />
					Guardian Information
				</CardHeader>
				<CardContent class="flex flex-col gap-4">
					<div>
						<Label class="mb-1">Guardian Name</Label>
						<Input
							placeholder="Enter Guardian's Name..."
							bind:value={interestForm.guardianInformation.name}
							name="guardian_name"
						/>
					</div>
					<div>
						<Label class="mb-1">Guardian Email</Label>
						<Input
							placeholder="Enter Guardian's Email..."
							bind:value={interestForm.guardianInformation.email}
							name="guardian_email"
						/>
					</div>
					<div>
						<Label class="mb-1">Guardian Phone Number</Label>
						<Input
							placeholder="Enter Guardian's Phone Number..."
							bind:value={interestForm.guardianInformation.phone}
							name="guardian_phone"
						/>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex items-center gap-1">
					<Icon icon="lucide:chat-square-dots" />
					Additional Information
				</CardHeader>
				<CardContent class="flex flex-col gap-4">
					<div>
						<Label class="mb-1">How did you hear about us?</Label>
						<Select
							type="single"
							bind:value={interestForm.additionalInfo.howDidYouHear}
							name="how_did_you_hear"
						>
							<SelectTrigger class="w-full"
								>{howDidYouHearOptions.find(
									(o) => o.value === interestForm.additionalInfo.howDidYouHear
								)?.label || 'Select an option'}</SelectTrigger
							>
							<SelectContent class="w-full">
								{#each howDidYouHearOptions as option (option.value)}
									<SelectItem value={option.value}>{option.label}</SelectItem>
								{/each}
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label class="mb-1">Additional Questions</Label>
						<Textarea
							placeholder="Enter Additional Questions..."
							bind:value={interestForm.additionalInfo.questions}
							name="additional_questions"
						/>
					</div>
					<div>
						<Label class="mb-1">Additional Message</Label>
						<Textarea
							placeholder="Enter Additional Message..."
							bind:value={interestForm.additionalInfo.message}
							name="additional_message"
						/>
					</div>
				</CardContent>
			</Card>
			<DialogFooter class="grid grid-cols-2 gap-1">
				<Button onclick={closeDialog} variant="outline"><X /> Close</Button>
				<Button type="submit" class="w-full bg-blue-500 text-white hover:bg-blue-700"
					>Submit <SendHorizontalIcon /></Button
				>
			</DialogFooter>
		</form>
	</DialogContent>
</Dialog>

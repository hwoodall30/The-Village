<script>
	import Footer from '$lib/components/app/footer.svelte';
	import PageHeaderDescription from '$lib/components/app/page-header/page-header-description.svelte';
	import PageHeaderTitle from '$lib/components/app/page-header/page-header-title.svelte';
	import PageHeaderWrapper from '$lib/components/app/page-header/page-header-wrapper.svelte';
	import PageHeader from '$lib/components/app/page-header/page-header.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { SendHorizontal } from '@lucide/svelte';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});
</script>

<main class="grid h-full grid-rows-[auto_auto_1fr]">
	<PageHeaderWrapper>
		<PageHeader>
			<PageHeaderTitle class="text-center"
				>Contact <span class="text-blue-500 [view-transition-name:page-header-title]">Us</span
				></PageHeaderTitle
			>
			<PageHeaderDescription class="text-center"
				>Please fill out this form below to contact us with any question or concerns and we will get
				back to you as soon as possible.</PageHeaderDescription
			>
		</PageHeader>
	</PageHeaderWrapper>

	<div class="px-5 py-20">
		<form action="https://formsubmit.co/hwoodall3002@gmail.com" method="POST">
			<input type="hidden" name="_subject" value="Contact Us Form" />

			<input type="text" name="_honey" style="display:none" />

			<div class="mx-auto flex max-w-3xl flex-col gap-4">
				<div>
					<Label class="mb-1">Name</Label>
					<Input placeholder="Name" bind:value={form.name} name="name" />
				</div>
				<div>
					<Label class="mb-1">Email</Label>
					<Input placeholder="Email" bind:value={form.email} name="email" type="email" />
				</div>
				<div>
					<Label class="mb-1">Phone</Label>
					<Input placeholder="Phone" bind:value={form.phone} name="phone" type="tel" />
				</div>
				<div>
					<Label class="mb-1">Message</Label>
					<Textarea placeholder="Message" bind:value={form.message} name="message" />
				</div>

				<Button type="submit" class="bg-blue-500 text-white hover:bg-blue-700"
					>Submit <SendHorizontal /></Button
				>
			</div>
		</form>
	</div>

	<Footer />
</main>

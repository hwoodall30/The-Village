<script>
	import Footer from '$lib/components/app/footer.svelte';
	import { BrandButton, BrandCard, BrandPageHeader, BrandSection } from '$lib/components/app/brand';
	import { CardContent } from '$lib/components/ui/card';
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

<main class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<BrandPageHeader
		eyebrow="Contact"
		titleBefore="Contact "
		titleAccent="Us"
		description="Please fill out this form with any questions or concerns and we will get back to you as soon as possible."
	/>

	<BrandSection>
		<BrandCard class="mx-auto max-w-3xl">
			<CardContent>
				<form action="https://formsubmit.co/hwoodall3002@gmail.com" method="POST">
					<input type="hidden" name="_subject" value="Contact Us Form" />
					<input type="text" name="_honey" style="display:none" />

					<div class="flex flex-col gap-5">
						<div>
							<Label class="mb-2 text-village-navy">Name</Label>
							<Input
								class="rounded-none bg-village-paper"
								placeholder="Name"
								bind:value={form.name}
								name="name"
							/>
						</div>
						<div>
							<Label class="mb-2 text-village-navy">Email</Label>
							<Input
								class="rounded-none bg-village-paper"
								placeholder="Email"
								bind:value={form.email}
								name="email"
								type="email"
							/>
						</div>
						<div>
							<Label class="mb-2 text-village-navy">Phone</Label>
							<Input
								class="rounded-none bg-village-paper"
								placeholder="Phone"
								bind:value={form.phone}
								name="phone"
								type="tel"
							/>
						</div>
						<div>
							<Label class="mb-2 text-village-navy">Message</Label>
							<Textarea
								class="min-h-36 rounded-none bg-village-paper"
								placeholder="Message"
								bind:value={form.message}
								name="message"
							/>
						</div>

						<BrandButton type="submit" class="w-full">Submit <SendHorizontal /></BrandButton>
					</div>
				</form>
			</CardContent>
		</BrandCard>
	</BrandSection>

	<Footer />
</main>

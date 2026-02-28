<script lang="ts">
	import { buttonVariants } from '../ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTrigger
	} from '../ui/dialog';
</script>

<Dialog>
	<DialogTrigger class={buttonVariants({ variant: 'outline' })}>Apply Now</DialogTrigger>
	<DialogContent class="max-w-[calc(100%-1rem)] px-2 pb-2">
		<DialogHeader>
			<DialogDescription>Please fill out the form below to apply.</DialogDescription>
		</DialogHeader>
		<div>
			<iframe
				title="Application Form"
				src="https://wandering-creek-796.notion.site/ebd//30fa87bdf5468064a3fec53c08bf922d"
				width="100%"
				height="500"
				frameborder="0"
				allowfullscreen
			></iframe>
		</div>
	</DialogContent>
</Dialog>

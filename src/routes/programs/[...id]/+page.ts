export const load = async ({ params }) => {
	try {
		const program = await import(`../../../lib/data/programs/${params.id}.md`);
		return {
			content: program.default,
			metadata: program.metadata
		};
	} catch {
		return {
			content: 'Not found',
			metadata: {}
		};
	}
};

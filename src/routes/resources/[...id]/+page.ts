import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../../lib/data/resources/${params.id}.md`);
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch {
		error(404, 'Resource not found');
	}
};

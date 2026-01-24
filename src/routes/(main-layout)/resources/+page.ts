import type { PageLoad } from './$types';

type BlogsMetaData = {
	id: number;
	title: string;
	date: string;
	description: string;
	author: string;
	category: string;
};

export const load: PageLoad = async () => {
	const modules = import.meta.glob('../../../lib/data/resources/*.md', { eager: true });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const resources = Object.entries(modules).map(([path, post]: any) => ({
		slug: path.split('/').pop()?.replace('.md', ''),
		metadata: (post.metadata as BlogsMetaData) ?? {}
	}));

	return { resources };
};

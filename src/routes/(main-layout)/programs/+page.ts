import type { PageLoad } from './$types';

type ProgramMetaData = {
	id: number;
	title: string;
	description: string;
	teacher: string;
	category: string;
};

export const load: PageLoad = async () => {
	const modules = import.meta.glob('../../../lib/data/programs/*.md', { eager: true });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const programs = Object.entries(modules).map(([path, post]: any) => ({
		slug: path.split('/').pop()?.replace('.md', ''),
		metadata: (post.metadata as ProgramMetaData) ?? {}
	}));

	return { programs };
};

import { SITE_URL, pageSeo } from '$lib/config/seo';
import type { RequestHandler } from './$types';

type ContentModule = {
	metadata?: {
		id?: string;
	};
};

const resourceModules = import.meta.glob<ContentModule>('/src/lib/data/resources/*.md', {
	eager: true
});

function contentPaths(prefix: string, modules: Record<string, ContentModule>) {
	return Object.values(modules)
		.map((module) => module.metadata?.id)
		.filter((id): id is string => Boolean(id))
		.map((id) => `${prefix}/${encodeURIComponent(id)}`);
}

function escapeXml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const GET: RequestHandler = () => {
	const paths = [
		...Object.entries(pageSeo)
			.filter(([, metadata]) => !('noindex' in metadata && metadata.noindex))
			.map(([path]) => path),
		...contentPaths('/resources', resourceModules)
	];

	const urls = paths
		.map((path) => {
			const url = new URL(path, SITE_URL).href;
			return `\t<url><loc>${escapeXml(url)}</loc></url>`;
		})
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(sitemap, {
		headers: {
			'Cache-Control': 'public, max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
};

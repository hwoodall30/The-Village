import logo from '$lib/assets/icons/the-village-icon.svg?raw';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return new Response(logo, {
		headers: {
			'Cache-Control': 'public, max-age=86400, s-maxage=604800',
			'Content-Type': 'image/svg+xml'
		}
	});
};

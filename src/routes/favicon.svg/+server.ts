import icon from '$lib/assets/icons/the-village-icon.svg?raw';
import type { RequestHandler } from './$types';

const squareIcon = icon.replace('viewBox="0 0 164.48 194.54"', 'viewBox="-15.03 0 194.54 194.54"');

export const GET: RequestHandler = () => {
	return new Response(squareIcon, {
		headers: {
			'Cache-Control': 'public, max-age=86400, s-maxage=604800',
			'Content-Type': 'image/svg+xml'
		}
	});
};

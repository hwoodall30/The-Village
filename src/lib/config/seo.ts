export const SITE_NAME = 'The Village Collaborative';
export const SITE_URL = 'https://www.village-collab.org';
export const CONTACT_EMAIL = 'help@village-collab.org';
export const FACEBOOK_URL =
	'https://www.facebook.com/people/The-Village-Collaborative/61585969575739/';

export type PageSeo = {
	title: string;
	description: string;
	noindex?: boolean;
};

export const pageSeo = {
	'/': {
		title: 'The Village Collaborative | Christ-Centered Homeschool Community',
		description:
			'A Christ-centered homeschool community where children are known, nurtured, and equipped for a life of purpose.'
	},
	'/about': {
		title: 'About | The Village Collaborative',
		description:
			'Learn about The Village Collaborative, a Christ-centered educational community built to partner with families in learning and discipleship.'
	},
	'/all-staff': {
		title: 'Our Staff | The Village Collaborative',
		description:
			'Meet the educators and leaders serving students and families at The Village Collaborative.'
	},
	'/application': {
		title: 'Apply | The Village Collaborative',
		description:
			'Follow the application process to enroll your family with The Village Collaborative.'
	},
	'/careers': {
		title: 'Careers | The Village Collaborative',
		description:
			'Explore opportunities to serve families and students as part of The Village Collaborative team.'
	},
	'/community': {
		title: 'Community | The Village Collaborative',
		description:
			'Discover a close Christ-centered community where parents, students, and staff learn and grow together.'
	},
	'/contact': {
		title: 'Contact | The Village Collaborative',
		description:
			'Contact The Village Collaborative with questions about our Christ-centered homeschool community.'
	},
	'/events': {
		title: 'Events | The Village Collaborative',
		description:
			'View upcoming meetings, enrollment dates, and community events from The Village Collaborative.'
	},
	'/our-approach': {
		title: 'Our Approach | The Village Collaborative',
		description:
			'See how The Village Collaborative blends homeschool flexibility with accountability, enrichment, and Christ-centered community.'
	},
	'/parents': {
		title: 'For Parents | The Village Collaborative',
		description:
			'Find admissions information, updates, and helpful guidance for families at The Village Collaborative.'
	},
	'/privacy-policy': {
		title: 'Privacy Policy | The Village Collaborative',
		description: 'Read the privacy policy for The Village Collaborative.',
		noindex: true
	},
	'/programs': {
		title: 'Programs | The Village Collaborative',
		description:
			'Explore Christ-centered academic, fine arts, biblical studies, and physical education programs for students.'
	},
	'/resources': {
		title: 'Family Resources | The Village Collaborative',
		description:
			'Explore practical documents, schedules, answers, and updates for Village families.'
	},
	'/terms': {
		title: 'Terms of Use | The Village Collaborative',
		description: 'Read the website terms of use for The Village Collaborative.',
		noindex: true
	}
} satisfies Record<string, PageSeo>;

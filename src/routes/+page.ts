import type { Schedule, Speaker } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const speakers: Speaker[] = [
		{
			photo: 'speakers/daouda.ba.webp',
			name: 'Daouda BA',
			role: 'Développeur FullStack & Lead Galsen DEV.',
			socials: [
				{ name: 'twitter', href: 'https://x.com/daoodaba975' },
				{ name: 'linkedin', href: 'https://linkedin.com/in/daoodaba975' },
				{ name: 'github', href: 'https://github.com/daoodaba975' }
			]
		},
		{
			photo: 'speakers/ousseynou.diop.webp',
			name: 'Ousseynou DIOP',
			role: 'CEO Xarala.',
			socials: [
				{ name: 'twitter', href: 'https://x.com/xarala221' },
				{ name: 'linkedin', href: 'https://linkedin.com/in/xarala221' },
				{ name: 'github', href: 'https://github.com/xarala221' }
			]
		},
		{
			photo: 'speakers/mohamed.gueye.webp',
			name: 'Mohamed GUEYE',
			role: 'Ingénieur logiciel & fondateur Futurize.',
			socials: [
				{ name: 'twitter', href: 'https://x.com/orbitturner' },
				{ name: 'linkedin', href: 'https://linkedin.com/in/orbitturner' },
				{ name: 'github', href: 'https://github.com/orbitturner' }
			]
		},
		{
			photo: 'speakers/papa.ndoye.webp',
			name: 'Papa Elhadj A. NDOYE',
			role: 'Développeur Web & Galsen DEV Staff.',
			socials: [
				{ name: 'linkedin', href: 'https://linkedin.com/in/papa-el-h-abdoulaye-ndoye' },
				{ name: 'github', href: 'https://github.com/NDOY3M4N' }
			]
		},
		{
			photo: 'speakers/medoune.balde.webp',
			name: 'Médoune Siby G. BALDE',
			role: 'Développeur FullStack & Galsen DEV Staff.',
			socials: [
				{ name: 'twitter', href: 'https://x.com/Medoune_SGB' },
				{ name: 'linkedin', href: 'https://linkedin.com/in/medounesgb' },
				{ name: 'github', href: 'https://github.com/MedouneSGB' }
			]
		},
		{
			photo: 'speakers/libasse.thiam.webp',
			name: 'Libasse THIAM',
			role: 'Développeur FullStack.',
			socials: [
				{ name: 'linkedin', href: 'https://linkedin.com/in/libscode' },
				{ name: 'github', href: 'https://github.com/lmtlibass' }
			]
		},
		{
			photo: 'speakers/alkaly.badji.webp',
			name: 'Moussa Alkaly BADJI',
			role: 'Développeur Web.',
			socials: [
				{ name: 'twitter', href: 'https://x.com/alkaly_badjii' },
				{ name: 'linkedin', href: 'https://linkedin.com/in/moussa-alkaly-badji-210965213' },
				{ name: 'github', href: 'https://github.com/Alkaly02' }
			]
		}
	];

	const schedule: Schedule[] = [
		{ title: 'Accueil et mise en place', time: '09:30 - 10:00' },

		{ title: 'Hack Session', time: '10:00 - 11:30', speaker: 'Daooda' },
		{ title: 'Premier Talk', time: '11:30 - 12:45', speaker: 'Daooda' },
		{ title: 'Deuxieme talk', time: '12:45 - 14:00', speaker: 'Daooda' },

		{ title: 'Pause dejeuner', time: '14:00 - 14:45' },

		{ title: 'Atelier', time: '15:00 - 16:00', speaker: 'Medoune Siby G. BALDE' },
		{ title: 'Troisieme Talk', time: '11:30 - 12:45', speaker: 'Papa Elhadj Abdoulaye NDOYE' },
		{ title: 'Séance photo de famille', time: '17:30' }
	];

	return {
		speakers,
		schedule
	};
};

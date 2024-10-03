import type { Schedule, Speaker } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  const speakers: Speaker[] = [
    {
      photo: 'https://avatars.githubusercontent.com/u/20214420?v=4',
      name: 'Daoouda Ba',
      role: 'Co-fondateur de GalsenDev',
      socials: [
        { name: 'twitter', href: 'https://fake-twitter.com' },
        { name: 'linkedin', href: 'https://fake-linkedin.com' },
        { name: 'github', href: 'https://fake-github.com' }
      ]
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/20214420?v=4',
      name: 'Papy',
      role: 'Co-fondateur de GalsenDev',
      socials: [
        { name: 'linkedin', href: 'https://fake-linkedin.com' },
        { name: 'github', href: 'https://fake-github.com' }
      ]
    },
    {
      photo: 'https://avatars.githubusercontent.com/u/20214420?v=4',
      name: 'Modou Fall',
      role: 'Co-fondateur de GalsenDev',
    }
  ];

  const schedule: Schedule[] = [
    { title: 'Accueil et mise en place', time: '09:00 - 11:30' },

    { title: 'Hack Session', time: '10:00 - 11:30', speaker: 'Daouda Ba' },
    { title: 'Premier Talk', time: '11:30 - 12:45', speaker: 'Modou Fall' },
    { title: 'Deuxieme talk', time: '12:45 - 14:00', speaker: 'Fatou fall' },

    { title: 'Pause dejeuner', time: '14:00 - 14:45' },

    { title: 'Atelier', time: '15:00 - 16:00', speaker: 'Medoune Siby Georges Balde' },
    { title: 'Troisieme Talk', time: '11:30 - 12:45', speaker: 'Papa Elhadj Abdoulaye Ndoye' },
    { title: 'Séance photo de famille', time: '17:30' },
  ]

  return {
    speakers,
    schedule
  };
};

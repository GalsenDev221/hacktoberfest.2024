import type { Speaker } from "$lib/types";
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

  return {
    speakers
  };
};

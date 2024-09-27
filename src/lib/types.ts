type Social = {
  name: 'linkedin' | 'github' | 'twitter';
  href: string;
};

export type Speaker = {
  photo?: string;
  name: string;
  role: string;
  socials?: Social[];
};


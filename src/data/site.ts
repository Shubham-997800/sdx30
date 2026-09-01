import type { SocialLink } from '@/types';

export const personalInfo = {
  name: 'SHUBHAM',
  fullName: 'SHUBHAM DANGI',
  firstName: 'Shubham',
  role: 'FRONTEND DEVELOPER',
  shortRole: 'Frontend Developer',
  tagline: 'BUILDING · LEARNING · SHIPPING',
  mainStatement:
    'I craft digital experiences where engineering precision meets editorial design.',
  description:
    'BCA student building frontend skills through real-world projects. Not following tutorials — shipping products that solve actual problems. Currently exploring React, modern tooling, and the engineering behind scalable web applications.',
  email: 'shubhamkumar997800@gmail.com',
  location: 'Ahmedabad, Gujarat, India',
  availability: 'Available for work',
  resumeUrl: 'https://github.com/Shubham-997800',
  github: 'Shubham-997800',
  linkedin: 'sdx30',
} as const;

export const heroContent = {
  availability: 'BUILDING INTERFACES · LEARNING THE ENGINEERING',
  name: 'SHUBHAM',
  role: 'FRONTEND DEVELOPER',
  mainStatement:
    'I craft digital experiences where engineering precision meets editorial design.',
  introduction:
    'BCA student building frontend skills through real-world projects. Not following tutorials — shipping products that solve actual problems. Currently exploring React, modern tooling, and the engineering behind scalable web applications.',
  cta: {
    primary: 'EXPLORE WORK',
    secondary: 'RESUME',
  },
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Shubham-997800',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sdx30/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:shubhamkumar997800@gmail.com',
    icon: 'mail',
  },
];

export const siteConfig = {
  name: 'SHUBHAM.DEV',
  title: 'SHUBHAM.DEV — Frontend Developer',
  description:
    'BCA student building frontend skills through real-world projects. Frontend developer crafting premium digital experiences with clean code and intentional design.',
  url: 'https://sdx30.vercel.app',
  ogImage: '/og-image.png',
} as const;

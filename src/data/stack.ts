import type { TechCategory } from '@/types';

export const techCategories: TechCategory[] = [
  {
    id: 'currently-using',
    title: 'CURRENTLY USING',
    status: 'using',
    items: [
      { name: 'HTML', status: 'using', detail: 'Structure' },
      { name: 'CSS', status: 'using', detail: 'Layout & Styling' },
      { name: 'JavaScript', status: 'using', detail: 'Foundation' },
    ],
  },
  {
    id: 'currently-learning',
    title: 'CURRENTLY LEARNING',
    status: 'learning',
    items: [
      { name: 'React 19', status: 'learning', detail: 'Modern Component UI' },
      { name: 'TypeScript', status: 'learning', detail: 'Type-Safe JavaScript' },
      { name: 'Tailwind CSS', status: 'learning', detail: 'Utility-First CSS' },
      { name: 'Vite', status: 'learning', detail: 'Build Tool' },
      { name: 'React Router', status: 'learning', detail: 'Client Routing' },
      { name: 'Motion', status: 'learning', detail: 'Animation Library' },
      { name: 'shadcn/ui', status: 'learning', detail: 'Component System' },
      { name: 'TanStack Query', status: 'learning', detail: 'Server State' },
    ],
  },
  {
    id: 'backend-learning',
    title: 'BACKEND — LEARNING',
    status: 'learning',
    items: [
      { name: 'Node.js', status: 'learning', detail: 'Runtime' },
      { name: 'Express', status: 'learning', detail: 'Framework' },
    ],
  },
  {
    id: 'database-learning',
    title: 'DATABASE — LEARNING',
    status: 'learning',
    items: [
      { name: 'PostgreSQL', status: 'learning', detail: 'Relational' },
      { name: 'MongoDB', status: 'learning', detail: 'Document' },
      { name: 'Prisma', status: 'learning', detail: 'ORM' },
    ],
  },
  {
    id: 'tools-deployment',
    title: 'TOOLS & DEPLOYMENT',
    status: 'using',
    items: [
      { name: 'Git', status: 'using', detail: 'Version Control' },
      { name: 'GitHub', status: 'using', detail: 'Collaboration' },
      { name: 'Vercel', status: 'using', detail: 'Deployment' },
      { name: 'Railway', status: 'learning', detail: 'Backend Hosting' },
      { name: 'Render', status: 'learning', detail: 'Deployment' },
    ],
  },
];

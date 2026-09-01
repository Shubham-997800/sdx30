import type { EngineeringCategory } from '@/types';

export const engineeringCategories: EngineeringCategory[] = [
  {
    id: 'ui-engineering',
    number: '01',
    title: 'UI ENGINEERING',
    description: 'Building responsive, accessible, and interactive interfaces.',
    skills: [
      { name: 'Responsive Design', detail: 'Mobile · Tablet · Desktop' },
      { name: 'Component Architecture', detail: 'Reusable · Composable · Scalable' },
      { name: 'Accessibility', detail: 'WCAG · ARIA · Keyboard Navigation' },
      { name: 'UI State', detail: 'Loading · Error · Empty · Success' },
    ],
  },
  {
    id: 'react-ecosystem',
    number: '02',
    title: 'REACT ECOSYSTEM',
    description: 'Modern React patterns and server-state management.',
    skills: [
      { name: 'React 19', detail: 'Hooks · Server Components · Actions' },
      { name: 'React Router', detail: 'Client Routing · Nested Routes' },
      { name: 'TanStack Query', detail: 'Server State · Caching · Optimistic Updates' },
      { name: 'Context API', detail: 'Global State · Theme · Auth' },
    ],
  },
  {
    id: 'styling',
    number: '03',
    title: 'STYLING',
    description: 'Design systems, responsive layouts, and theming.',
    skills: [
      { name: 'Tailwind CSS', detail: 'Utility-First · Custom Tokens' },
      { name: 'CSS', detail: 'Variables · Animations · Grid · Flexbox' },
      { name: 'Responsive Layouts', detail: 'Fluid Typography · Breakpoints' },
      { name: 'Dark / Light Themes', detail: 'oklch · Semantic Tokens' },
    ],
  },
  {
    id: 'application-development',
    number: '04',
    title: 'APPLICATION DEVELOPMENT',
    description: 'Full frontend application lifecycle from API to deployment.',
    skills: [
      { name: 'API Integration', detail: 'REST · GraphQL · Error Handling' },
      { name: 'Forms', detail: 'React Hook Form · Zod · Multi-Step' },
      { name: 'Validation', detail: 'Client-Side · Schema · Type-Safe' },
      { name: 'Charts', detail: 'Recharts · Data Visualization' },
      { name: 'PWA', detail: 'Service Workers · Offline · Installable' },
      { name: 'Deployment', detail: 'Vercel · CI/CD · Performance' },
    ],
  },
];

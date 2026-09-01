import type { JourneyEvent } from '@/types';

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'odoo-hackathon-2026',
    number: '01',
    title: 'Odoo Hackathon 2026',
    organization: 'Odoo',
    category: 'HACKATHON',
    milestones: [
      {
        id: 'grand-finale',
        label: 'Grand Finale Finalist · Team Leader — selected from 20,000+ applicants',
        type: 'achievement',
      },
      {
        id: 'gandhinagar',
        label: '5–6 Sep 2026 · Gandhinagar',
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'bharatiya-antariksh-2026',
    number: '02',
    title: 'Bharatiya Antariksh Hackathon 2026',
    organization: 'ISRO',
    category: 'HACKATHON',
    milestones: [
      {
        id: 'participated',
        label: 'Participated — presented by ISRO',
        type: 'achievement',
      },
      {
        id: 'spacetech',
        label: 'Worked on a real-world SpaceTech problem · Powered by Hack2Skill',
        type: 'default',
      },
    ],
  },
  {
    id: 'vibe2ship',
    number: '03',
    title: 'Vibe2Ship',
    organization: 'Coding Ninjas × Google',
    category: 'HACKATHON',
    project: 'FlowSync AI',
    milestones: [
      {
        id: 'solo',
        label: 'Solo Hackathon · Built FlowSync AI',
        type: 'achievement',
      },
    ],
  },
  {
    id: 'ai-agents-intensive',
    number: '04',
    title: 'AI Agents Intensive',
    organization: 'Kaggle × Google',
    category: 'COURSE',
    milestones: [
      {
        id: 'completed',
        label: 'Completed 5-Day Intensive Course',
        type: 'achievement',
      },
    ],
  },
];

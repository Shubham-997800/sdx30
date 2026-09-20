import type { JourneyEvent } from '@/types';

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'odoo-hackathon-2026',
    number: '01',
    title: 'Odoo Hackathon 2026',
    organization: 'Odoo India · Gandhinagar',
    category: 'HACKATHON',
    project: 'DealFlow360 MSR',
    githubUrl: 'https://github.com/lab4-MSR/dealflow360-msr',
    linkText: 'DEALFLOW360 REPO',
    milestones: [
      {
        id: 'grand-finale',
        label: 'Grand Finale Finalist & Team Lead — selected from 20,000+ applicants across India',
        type: 'achievement',
      },
      {
        id: 'dealflow360',
        label: 'Built DealFlow360 MSR — Enterprise B2B ERP & deal flow management platform',
        type: 'achievement',
      },
      {
        id: 'gandhinagar',
        label: '5–6 Sep 2026 · Gandhinagar (Grand Finale Concluded)',
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'sih-2026',
    number: '02',
    title: 'Smart India Hackathon (SIH)',
    organization: 'MoE (Govt. of India) × IIT Hyderabad',
    category: 'HACKATHON',
    milestones: [
      {
        id: 'sih-domain',
        label: 'CyberSecurity & Automated Threat Intelligence for PSB (Public Sector Banks)',
        type: 'achievement',
      },
      {
        id: 'sih-venue',
        label: 'Competed & Evaluated at IIT Hyderabad Nodal Center',
        type: 'achievement',
      },
      {
        id: 'sih-scope',
        label: "Engineered secure banking threat detection and financial security infrastructure",
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'bharatiya-antariksh-2026',
    number: '03',
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
    number: '04',
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
    number: '05',
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

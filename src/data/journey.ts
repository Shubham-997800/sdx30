import type { JourneyEvent } from '@/types';

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'odoo-hackathon-2026',
    number: '01',
    shortTitle: "Odoo Combat '26",
    title: 'Odoo Hackathon 2026',
    organization: 'Odoo India · Gandhinagar',
    category: 'HACKATHON',
    date: '5–6 Sep 2026',
    venue: 'Gandhinagar, Gujarat',
    statusBadge: 'GRAND FINALE FINALIST',
    project: 'DealFlow360 MSR',
    projectDescription:
      'Enterprise B2B ERP platform engineered during the 24-hr on-site Grand Finale to manage investor deal pipelines, operational stages, and multi-tenant analytics.',
    githubUrl: 'https://github.com/lab4-MSR/dealflow360-msr',
    linkText: 'DEALFLOW360 REPO',
    tags: ['Team Lead', 'B2B ERP', 'TypeScript', 'Top 1% of 20k+'],
    milestones: [
      {
        id: 'odoo-finalist',
        label: 'Grand Finale Finalist & Team Lead — Selected from 20,000+ applicants across India',
        type: 'achievement',
      },
      {
        id: 'odoo-project',
        label: 'Built DealFlow360 MSR — Enterprise B2B deal flow and pipeline ERP system',
        type: 'achievement',
      },
      {
        id: 'odoo-venue',
        label: 'Completed intensive 24-hour on-site Grand Finale hackathon at Gandhinagar',
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'psb-cybersecurity-iith',
    number: '02',
    shortTitle: 'IIT-H CyberSecurity',
    title: 'PSB CyberSecurity Hackathon',
    organization: 'Public Sector Banks (PSB) × IIT Hyderabad',
    category: 'HACKATHON',
    date: '2026',
    venue: 'IIT Hyderabad Nodal Center',
    statusBadge: 'SECURITY BUILD',
    projectDescription:
      'Security-focused national build at IIT Hyderabad developing automated threat detection, penetration analysis, and cyber vulnerability mitigation for Public Sector Banks (PSB).',
    tags: ['CyberSecurity', 'IIT Hyderabad', 'PSB Banking', 'Threat Intelligence'],
    milestones: [
      {
        id: 'iith-venue',
        label: 'Security-focused national build evaluated at IIT Hyderabad Nodal Center',
        type: 'achievement',
      },
      {
        id: 'iith-domain',
        label: 'Problem Statement: CyberSecurity & Automated Threat Intelligence for PSB (Public Sector Banks)',
        type: 'achievement',
      },
      {
        id: 'iith-arch',
        label: 'Engineered real-time vulnerability detection and banking financial threat mitigation workflows',
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'sih-2026',
    number: '03',
    shortTitle: 'Smart India (SIH)',
    title: 'Smart India Hackathon (SIH 2026)',
    organization: 'Ministry of Education (Govt. of India)',
    category: 'HACKATHON',
    date: '2026',
    venue: 'National Stage',
    statusBadge: 'NATIONAL BUILD',
    projectDescription:
      'Participated in the world’s biggest open innovation hackathon, building scalable technology solutions for national-level problem statements.',
    tags: ['SIH 2026', 'Govt of India', 'National Finalist', 'System Architecture'],
    milestones: [
      {
        id: 'sih-selection',
        label: 'Selected for Smart India Hackathon (SIH) — Premier nationwide innovation initiative',
        type: 'achievement',
      },
      {
        id: 'sih-compete',
        label: 'Competed against top engineering teams across India on complex national challenges',
        type: 'achievement',
      },
      {
        id: 'sih-design',
        label: 'Designed modular, resilient software architecture under strict regulatory guidelines',
        type: 'default',
      },
    ],
    featured: true,
  },
  {
    id: 'bharatiya-antariksh-2026',
    number: '04',
    shortTitle: 'ISRO SpaceTech',
    title: 'Bharatiya Antariksh Hackathon 2026',
    organization: 'ISRO (Indian Space Research Organisation)',
    category: 'HACKATHON',
    date: '2026',
    venue: 'Hack2Skill Platform',
    statusBadge: 'SPACETECH CHALLENGE',
    projectDescription:
      'Engineered computational solutions for real-world space technology and satellite data problem statements presented by ISRO scientists.',
    tags: ['SpaceTech', 'ISRO', 'Data Analytics', 'Hack2Skill'],
    milestones: [
      {
        id: 'isro-part',
        label: 'Official Participant — National Hackathon presented by ISRO',
        type: 'achievement',
      },
      {
        id: 'isro-space',
        label: 'Worked on real-world SpaceTech and geospatial problem statements',
        type: 'default',
      },
      {
        id: 'isro-pipeline',
        label: 'Explored data processing pipelines for space research and telemetry',
        type: 'default',
      },
    ],
  },
  {
    id: 'vibe2ship',
    number: '05',
    shortTitle: 'Google Vibe2Ship',
    title: 'Vibe2Ship Hackathon',
    organization: 'Coding Ninjas × Google',
    category: 'HACKATHON',
    date: '2026',
    venue: 'Virtual / Global',
    statusBadge: 'SOLO BUILD',
    project: 'FlowSync AI',
    projectDescription:
      'AI-powered productivity operating system featuring multi-provider AI, voice transcription, and deadline risk prediction.',
    githubUrl: 'https://github.com/Shubham-997800/FlowSyncAi',
    liveUrl: 'https://flowsyncai30.vercel.app/',
    linkText: 'FLOWSYNC AI REPO',
    tags: ['Solo Developer', 'React 19', 'OpenRouter', 'AI Scheduling'],
    milestones: [
      {
        id: 'vibe-solo',
        label: 'Solo Hackathon Build — Architected, built, and shipped FlowSync AI from scratch',
        type: 'achievement',
      },
      {
        id: 'vibe-models',
        label: 'Integrated multi-provider AI fallbacks (OpenRouter) with real-time risk assessment',
        type: 'achievement',
      },
      {
        id: 'vibe-ship',
        label: 'Deployed full-stack platform live to production with real-time workflow sync',
        type: 'default',
      },
    ],
  },
  {
    id: 'kaggle-ai-agents',
    number: '06',
    shortTitle: 'Kaggle AI Agents',
    title: 'Kaggle × Google AI Agents Hackathon',
    organization: 'Kaggle × Google',
    category: 'HACKATHON',
    date: '2026',
    venue: 'Kaggle Platform',
    statusBadge: 'AGENTIC AI',
    project: 'StartupLaunch AI',
    projectDescription:
      'Engineered StartupLaunch AI during the Kaggle × Google Hackathon — autonomous multi-agent platform automating market analysis, launch strategy, and execution roadmaps for founders.',
    githubUrl: 'https://github.com/Shubham-997800/startuplaunchai',
    liveUrl: 'https://startuplaunch30.vercel.app/',
    linkText: 'STARTUPLAUNCH REPO',
    tags: ['Agentic Workflows', 'Startup OS', 'Google AI', 'Multi-Agent'],
    milestones: [
      {
        id: 'kaggle-project',
        label: 'Built StartupLaunch AI — Autonomous multi-agent launch system for startup founders',
        type: 'achievement',
      },
      {
        id: 'kaggle-course',
        label: 'Competed in Google × Kaggle Hackathon on Autonomous Agent Design & Orchestration',
        type: 'achievement',
      },
      {
        id: 'kaggle-arch',
        label: 'Implemented tool-calling loops, structured prompting, and memory persistence in production',
        type: 'default',
      },
    ],
  },
];

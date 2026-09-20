export interface JourneyMilestone {
  id: string;
  label: string;
  type?: 'default' | 'achievement';
}

export interface JourneyEvent {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  project?: string;
  projectDescription?: string;
  organization: string;
  category: string;
  date?: string;
  venue?: string;
  statusBadge?: string;
  tags?: string[];
  milestones: JourneyMilestone[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  linkText?: string;
}

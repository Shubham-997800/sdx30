export interface JourneyMilestone {
  id: string;
  label: string;
  type?: 'default' | 'achievement';
}

export interface JourneyEvent {
  id: string;
  number: string;
  title: string;
  project?: string;
  organization?: string;
  category: string;
  milestones: JourneyMilestone[];
  featured?: boolean;
}

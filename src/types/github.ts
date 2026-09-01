export interface GitHubProfile {
  username: string;
  url: string;
  stats: {
    contributions: string;
    streak: string;
    commits: string;
    prs: string;
    stars: string;
  };
  topLanguages: LanguageStat[];
  pinnedRepos: PinnedRepo[];
  recentActivity: ActivityItem[];
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  liveUrl?: string;
}

export interface LanguageStat {
  name: string;
  percentage: number;
}

export interface ActivityItem {
  message: string;
  repo: string;
  date: string;
}

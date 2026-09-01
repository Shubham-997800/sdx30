export interface GitHubStats {
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  totalStars: number;
  contributionDays: ContributionDay[];
  pinnedRepos: PinnedRepo[];
  languages: LanguageStat[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

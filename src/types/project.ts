export type ProjectSlug = 'flowsync-ai' | 'workos' | 'assetrix' | 'campus360' | 'startuplaunchai' | 'sofawala';

export type ProjectLayout = 'media-left' | 'media-right' | 'featured' | 'asymmetric';

export interface Project {
  id: string;
  number: string;
  slug: ProjectSlug;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  category: string;
  features: string[];
  technologies: string[];
  layout: ProjectLayout;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

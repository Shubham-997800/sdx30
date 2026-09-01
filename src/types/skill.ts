export interface Skill {
  name: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

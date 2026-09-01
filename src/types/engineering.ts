export interface EngineeringSkill {
  name: string;
  detail?: string;
}

export interface EngineeringCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: EngineeringSkill[];
}

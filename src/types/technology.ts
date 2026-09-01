export interface Technology {
  name: string;
  category: string;
  icon?: string;
  description?: string;
  proficiency: "expert" | "advanced" | "intermediate" | "learning";
}

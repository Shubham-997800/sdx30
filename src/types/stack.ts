export type TechStatus = 'using' | 'learning';

export interface TechItem {
  name: string;
  status: TechStatus;
  detail?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  status: TechStatus;
  items: TechItem[];
}

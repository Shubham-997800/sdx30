export interface ProofItem {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
  span?: { cols: number; rows: number };
}

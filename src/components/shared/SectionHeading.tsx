import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  title: string;
  label?: string;
  className?: string;
}

export function SectionHeading({ title, label, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-h1 text-foreground">{title}</h2>
    </div>
  );
}

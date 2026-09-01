import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export function SectionLabel({ children, className, number }: SectionLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-overline", className)}>
      {number && <span className="text-accent font-mono">{number}</span>}
      <span>{children}</span>
    </span>
  );
}

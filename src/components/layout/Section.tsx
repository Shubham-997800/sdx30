import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export function Section({ children, className, id, as: Component = "section" }: SectionProps) {
  return (
    <Component id={id} className={cn("py-24 md:py-32 lg:py-40", className)}>
      {children}
    </Component>
  );
}

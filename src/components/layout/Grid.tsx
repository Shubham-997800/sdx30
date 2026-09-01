import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 4 | 8 | 12;
}

export function Grid({ children, className, cols = 12 }: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-5 lg:gap-6",
        cols === 4 && "grid-cols-4",
        cols === 8 && "grid-cols-8",
        cols === 12 && "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: ReactNode;
  className?: string;
  span?: { cols?: number; rows?: number };
}

export function GridItem({ children, className, span }: GridItemProps) {
  return (
    <div
      className={cn(
        span?.cols === 2 && "col-span-2",
        span?.cols === 3 && "col-span-3",
        span?.cols === 4 && "col-span-4",
        span?.cols === 6 && "col-span-4 md:col-span-6",
        span?.cols === 8 && "col-span-4 md:col-span-8",
        span?.cols === 12 && "col-span-4 md:col-span-8 lg:col-span-12",
        span?.rows === 2 && "row-span-2",
        className
      )}
    >
      {children}
    </div>
  );
}

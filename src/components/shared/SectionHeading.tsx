import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  title: string;
  label?: string;
  number?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  label,
  number,
  description,
  className,
  titleClassName,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "text-center",
        className
      )}
    >
      {(label || number) && (
        <SectionLabel number={number}>{label}</SectionLabel>
      )}
      <h2
        className={cn(
          "text-section text-foreground max-w-3xl",
          align === "center" && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body-lg text-muted-foreground max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

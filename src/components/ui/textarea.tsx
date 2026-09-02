import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-all duration-300 outline-none placeholder:text-muted-foreground",
        "focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/20 focus-visible:shadow-[0_0_16px_oklch(from_var(--accent)_l_c_h_/_0.12)]",
        "disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:animate-[shake_0.4s_ease-in-out]",
        "md:text-sm resize-y dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

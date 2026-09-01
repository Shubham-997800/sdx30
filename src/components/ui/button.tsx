import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // ── Base ──
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap outline-none select-none transition-all duration-200 ease-[var(--ease-spring)] focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // ── Solid: accent bg, dark text ──
        default:
          "bg-accent text-accent-foreground border border-accent hover:brightness-110 hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-sm active:brightness-95",

        // ── Outline: border, transparent bg ──
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted/50 hover:border-border-strong hover:-translate-y-px hover:shadow-sm active:translate-y-0 active:bg-muted/80",

        // ── Secondary: subtle surface ──
        secondary:
          "bg-secondary text-secondary-foreground border border-transparent hover:bg-secondary/80 hover:-translate-y-px active:translate-y-0",

        // ── Ghost: no bg, no border ──
        ghost:
          "border border-transparent text-foreground hover:bg-muted/50 hover:-translate-y-px active:translate-y-0",

        // ── Destructive: danger actions ──
        destructive:
          "bg-destructive text-white border border-destructive hover:brightness-110 hover:-translate-y-px hover:shadow-md active:translate-y-0 active:brightness-95",

        // ── Link: inline text ──
        link:
          "text-accent underline-offset-4 hover:underline border-none bg-transparent p-0 h-auto active:scale-[0.98]",

        // ── Neo: sharp corners, offset shadow ──
        neo:
          "rounded-none border-2 border-foreground bg-accent text-accent-foreground font-semibold shadow-[3px_3px_0_oklch(0.12_0.005_260_/_0.2)] hover:shadow-[4px_4px_0_oklch(0.12_0.005_260_/_0.25)] hover:-translate-y-px hover:brightness-110 active:shadow-[1px_1px_0_oklch(0.12_0.005_260_/_0.2)] active:translate-y-[2px] active:brightness-95 dark:shadow-[3px_3px_0_oklch(1_0_0_/_0.12)] dark:hover:shadow-[4px_4px_0_oklch(1_0_0_/_0.18)] dark:active:shadow-[1px_1px_0_oklch(1_0_0_/_0.12)]",

        // ── Glass: frosted, for overlay sections ──
        glass:
          "border border-white/10 bg-white/5 backdrop-blur-md text-foreground shadow-lg shadow-black/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-px active:translate-y-0 active:bg-white/8",

        // ── Glow: primary with ambient blur halo ──
        glow:
          "relative bg-accent text-accent-foreground border border-accent shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-px hover:brightness-110 active:translate-y-0 active:brightness-95 before:absolute before:inset-0 before:rounded-[inherit] before:bg-accent before:blur-xl before:opacity-30 before:transition-opacity before:duration-300 hover:before:opacity-50",

        // ── Shimmer: light sweep on hover ──
        shimmer:
          "relative bg-accent text-accent-foreground border border-accent shadow-lg shadow-accent/20 overflow-hidden hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-px hover:brightness-110 active:translate-y-0 active:brightness-95 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-500",
      },

      size: {
        xs: "h-8 rounded-lg px-3 text-xs gap-1 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 rounded-lg px-4 text-[0.8rem] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-10 rounded-lg px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        lg: "h-12 rounded-xl px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        xl: "h-14 rounded-xl px-9 text-base gap-2 has-data-[icon=inline-end]:pr-8 has-data-[icon=inline-start]:pl-8",
        icon: "size-10 rounded-lg",
        "icon-xs": "size-8 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
    },

    compoundVariants: [
      // Neo sizes use sharp corners
      { variant: "neo", size: "xs", className: "rounded-none" },
      { variant: "neo", size: "sm", className: "rounded-none" },
      { variant: "neo", size: "default", className: "rounded-none" },
      { variant: "neo", size: "lg", className: "rounded-none" },
      { variant: "neo", size: "xl", className: "rounded-none" },
      { variant: "neo", size: "icon", className: "rounded-none" },
      { variant: "neo", size: "icon-xs", className: "rounded-none" },
      { variant: "neo", size: "icon-sm", className: "rounded-none" },
      { variant: "neo", size: "icon-lg", className: "rounded-none" },

      // Link size overrides
      { variant: "link", size: "xs", className: "h-auto px-0" },
      { variant: "link", size: "sm", className: "h-auto px-0" },
      { variant: "link", size: "default", className: "h-auto px-0" },
      { variant: "link", size: "lg", className: "h-auto px-0" },
      { variant: "link", size: "xl", className: "h-auto px-0" },
      { variant: "link", size: "icon", className: "h-auto px-0" },
      { variant: "link", size: "icon-xs", className: "h-auto px-0" },
      { variant: "link", size: "icon-sm", className: "h-auto px-0" },
      { variant: "link", size: "icon-lg", className: "h-auto px-0" },
    ],

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

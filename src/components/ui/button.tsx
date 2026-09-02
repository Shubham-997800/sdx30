import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { useCallback, useRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap font-medium outline-none select-none transition-all duration-200 ease-[var(--ease-spring)] focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // ── Primary: white bg, sharp, premium ──
        default:
          "bg-primary text-primary-foreground border border-primary/20 rounded-[4px] hover:bg-primary/90 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(from_var(--primary)_l_c_h_/_0.15)] active:bg-primary/85",

        // ── Outline: transparent, border only ──
        outline:
          "bg-transparent text-foreground border border-border rounded-[4px] hover:border-foreground/30 hover:bg-foreground/[0.03] active:bg-foreground/[0.06]",

        // ── Secondary: subtle surface ──
        secondary:
          "bg-secondary text-secondary-foreground border border-transparent rounded-[4px] hover:bg-secondary/80 active:bg-secondary/70",

        // ── Ghost: no border ──
        ghost:
          "bg-transparent text-foreground border border-transparent rounded-[4px] hover:bg-foreground/[0.05] active:bg-foreground/[0.08]",

        // ── Destructive: danger ──
        destructive:
          "bg-destructive text-white border border-destructive rounded-[4px] hover:bg-destructive/90 hover:border-destructive/80 active:bg-destructive/80",

        // ── Link: inline text ──
        link:
          "text-accent underline-offset-4 hover:underline border-none bg-transparent p-0 h-auto rounded-none active:scale-[0.97]",

        // ── Accent: teal accent bg ──
        accent:
          "bg-accent text-accent-foreground border border-accent rounded-[4px] hover:bg-accent/90 hover:shadow-[0_0_20px_oklch(from_var(--accent)_l_c_h_/_0.2)] active:bg-accent/80",

        // ── Glass: frosted for dark sections ──
        glass:
          "bg-white/5 text-foreground border border-white/10 rounded-[4px] backdrop-blur-md hover:bg-white/10 hover:border-white/20 active:bg-white/[0.08]",

        // ── Glow: accent with ambient halo ──
        glow:
          "relative bg-accent text-accent-foreground border border-accent rounded-[4px] shadow-[0_0_24px_oklch(from_var(--accent)_l_c_h_/_0.2)] hover:shadow-[0_0_32px_oklch(from_var(--accent)_l_c_h_/_0.35)] hover:bg-accent/90 active:bg-accent/80",

        // ── Shimmer: light sweep ──
        shimmer:
          "relative bg-primary text-primary-foreground border border-primary/20 rounded-[4px] shadow-[0_0_16px_oklch(from_var(--primary)_l_c_h_/_0.1)] hover:shadow-[0_0_24px_oklch(from_var(--primary)_l_c_h_/_0.2)] hover:border-primary/30 hover:bg-primary/90 active:bg-primary/85 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-500",

        // ── Neo: sharp offset shadow ──
        neo:
          "rounded-none border-2 border-foreground bg-primary text-primary-foreground font-semibold shadow-[3px_3px_0_foreground] hover:shadow-[4px_4px_0_foreground] hover:-translate-y-px active:shadow-[1px_1px_0_foreground] active:translate-y-[2px]",
      },

      size: {
        xs: "h-7 rounded-[3px] px-2.5 text-[0.7rem] gap-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-[3px] px-3.5 text-[0.75rem] has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-9 px-5 text-[0.8rem] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        lg: "h-11 px-6 text-[0.85rem] has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        xl: "h-12 px-8 text-sm gap-2 has-data-[icon=inline-end]:pr-7 has-data-[icon=inline-start]:pl-7",
        icon: "size-9 rounded-[3px]",
        "icon-xs": "size-7 rounded-[3px] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[3px]",
        "icon-lg": "size-11 rounded-[4px]",
      },
    },

    compoundVariants: [
      { variant: "neo", size: "xs", className: "rounded-none" },
      { variant: "neo", size: "sm", className: "rounded-none" },
      { variant: "neo", size: "default", className: "rounded-none" },
      { variant: "neo", size: "lg", className: "rounded-none" },
      { variant: "neo", size: "xl", className: "rounded-none" },
      { variant: "neo", size: "icon", className: "rounded-none" },
      { variant: "neo", size: "icon-xs", className: "rounded-none" },
      { variant: "neo", size: "icon-sm", className: "rounded-none" },
      { variant: "neo", size: "icon-lg", className: "rounded-none" },

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
  onClick,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget;
      const ripple = document.createElement("span");
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;
        width:${size}px;height:${size}px;left:${x}px;top:${y}px;
        background:currentColor;opacity:0.15;
        transform:scale(0);animation:ripple-expand 0.6s ease-out forwards;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      onClick?.(e);
    },
    [onClick],
  );

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        'relative overflow-hidden',
        buttonVariants({ variant, size, className }),
      )}
      onClick={handleClick}
      {...props}
    />
  );
}

export { Button, buttonVariants };

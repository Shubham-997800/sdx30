import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-500 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 active:shadow-md active:brightness-95",
        outline:
          "border-border/60 bg-background/80 backdrop-blur-sm text-foreground hover:border-accent/50 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 active:translate-y-0 active:bg-accent/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:-translate-y-1 active:translate-y-0",
        ghost:
          "hover:bg-accent/10 hover:text-foreground hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/10 hover:-translate-y-1 active:translate-y-0",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "relative bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 active:brightness-95 before:absolute before:inset-0 before:rounded-2xl before:bg-primary before:blur-xl before:opacity-40 before:transition-opacity before:duration-500 hover:before:opacity-60",
        premium:
          "relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 hover:bg-right hover:brightness-110 active:translate-y-0 active:brightness-95 transition-all duration-700",
        glass:
          "border-white/10 bg-white/5 backdrop-blur-md text-foreground shadow-lg shadow-black/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-1 active:translate-y-0 active:bg-white/8",
        shimmer:
          "relative bg-primary text-primary-foreground shadow-lg shadow-primary/25 overflow-hidden hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700",
        outlineAnimated:
          "relative border-2 border-accent/50 bg-transparent text-foreground hover:border-accent hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-1 active:translate-y-0 before:absolute before:inset-0 before:rounded-2xl before:bg-accent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-10 hover:text-accent",
      },
      size: {
        default:
          "h-11 gap-1.5 px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 rounded-2xl",
        xs: "h-8 gap-1 rounded-xl px-3 text-xs has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 rounded-xl px-4 text-[0.8rem] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-2.5 px-8 text-base rounded-2xl has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-11",
        "icon-xs": "size-8 rounded-xl [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-xl",
        "icon-lg": "size-14",
      },
    },
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

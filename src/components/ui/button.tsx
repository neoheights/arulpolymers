import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] rounded-br-[4px] text-sm font-semibold tracking-[0.03em] cursor-pointer transition-[transform,box-shadow,background,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground border border-black/25 bg-gradient-to-b from-[color-mix(in_oklab,var(--blue)_92%,white)] to-[var(--navy)] shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_2px_0_var(--navy-deep),0_4px_10px_-4px_color-mix(in_oklab,var(--navy-deep)_55%,transparent)] hover:-translate-y-[2px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_4px_0_var(--navy-deep),0_10px_18px_-8px_color-mix(in_oklab,var(--navy-deep)_65%,transparent)]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[color-mix(in_oklab,var(--blue)_35%,transparent)] text-primary bg-gradient-to-b from-white to-[var(--cool)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_0_color-mix(in_oklab,var(--navy)_12%,transparent)] hover:-translate-y-[2px] hover:border-[color-mix(in_oklab,var(--blue)_65%,transparent)]",
        secondary:
          "text-secondary-foreground border border-[color-mix(in_oklab,var(--blue)_35%,transparent)] bg-gradient-to-b from-white to-[var(--cool)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_0_color-mix(in_oklab,var(--navy)_12%,transparent),0_4px_10px_-6px_color-mix(in_oklab,var(--navy)_30%,transparent)] hover:-translate-y-[2px] hover:border-[color-mix(in_oklab,var(--blue)_65%,transparent)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-10 rounded-[10px] rounded-br-[4px] px-5 text-xs",
        lg: "h-[54px] px-8 text-[15px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

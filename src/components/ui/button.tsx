import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    variants: {
      size: {
        clean: "",
        default: "h-10 px-4",
        xs: "h-6 px-2",
        sm: "h-8 px-4",
        md: "h-9 px-4",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
        "icon-sm": "h-8 min-h-8 w-9 min-w-9",
        "icon-md": "h-10 w-10",
        "icon-lg": "h-11 w-11",
      },
      variant: {
        badge:
          "h-[21px] flex rounded-full border px-2.5 text-xs font-semibold text-foreground hover:bg-accent",
        clean: "bg-transparent px-2",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-custom-red-secondary",
        destructiveOutline:
          "bg-background text-destructive border border-destructive hover:bg-custom-red-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "h-[21px] text-primary underline-offset-4 hover:underline p-0",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

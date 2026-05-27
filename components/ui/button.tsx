import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-all duration-300 ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-foreground text-background",
          "hover:bg-accent hover:text-accent-foreground",
        ],
        accent: [
          "bg-accent text-accent-foreground",
          "hover:bg-accent-hover",
        ],
        outline: [
          "border border-border-strong bg-transparent text-foreground",
          "hover:bg-foreground hover:text-background",
        ],
        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-surface-elevated",
        ],
        link: [
          "h-auto p-0 text-foreground underline-offset-4",
          "hover:underline",
        ],
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-base",
        icon: "h-12 w-12",
      },
      shape: {
        sharp: "rounded-none",
        soft: "rounded-sm",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "soft",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };

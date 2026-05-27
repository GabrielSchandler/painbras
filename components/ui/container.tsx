import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  as?: "div" | "section" | "article" | "header" | "footer" | "main" | "aside";
}

const sizes = {
  narrow: "max-w-[960px]",
  default: "max-w-[1320px]",
  wide: "max-w-[1440px]",
  full: "max-w-none",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref as never}
        className={cn(
          "mx-auto w-full px-6 sm:px-8 lg:px-12",
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Container.displayName = "Container";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  number?: string;
  variant?: "default" | "inverted";
}

export function Eyebrow({ children, className, number, variant = "default" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em]",
        variant === "default" ? "text-muted-foreground" : "text-background/70",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          variant === "default" ? "bg-border-strong" : "bg-background/40",
        )}
      />
      {number && (
        <span className="font-mono text-foreground/70 tabular">
          {variant === "default" ? null : null}
          {number}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "default" | "strong";
}

export function Divider({ className, variant = "default" }: DividerProps) {
  return (
    <hr
      aria-hidden
      className={cn(
        "h-px w-full border-0",
        variant === "default" ? "bg-border" : "bg-border-strong",
        className,
      )}
    />
  );
}

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowNumber?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const sizes = {
  md: "text-3xl sm:text-4xl md:text-[2.75rem]",
  lg: "text-4xl sm:text-5xl md:text-6xl",
  xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
};

export function SectionHeading({
  eyebrow,
  eyebrowNumber,
  title,
  description,
  align = "left",
  size = "lg",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        size === "xl" && "max-w-5xl",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-8">
          <Eyebrow number={eyebrowNumber}>{eyebrow}</Eyebrow>
        </div>
      )}
      <Heading
        className={cn(
          "font-display font-medium text-balance text-foreground",
          sizes[size],
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

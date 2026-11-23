import type { ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "h2" | "p";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      className={cn("reveal", shown && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

export function MicroLabel({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: "blue" | "red" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "label-micro flex items-center gap-3",
        tone === "blue" && "text-blue",
        tone === "red" && "text-red",
        tone === "light" && "text-white/60",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          tone === "red" ? "bg-red" : tone === "light" ? "bg-white/40" : "bg-blue/50",
        )}
      />
      {children}
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={cn("h-2.5 w-6", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 6h22M17 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

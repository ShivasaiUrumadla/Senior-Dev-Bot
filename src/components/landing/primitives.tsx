import { ArrowRight, ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const INSTALL_URL = "https://github.com/apps/pr-review-pro-max";

export function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-2.92-.88-2.92-2.86 0-.85.3-1.53.79-2.07-.08-.2-.35-1.01.08-2.1 0 0 .65-.2 2.13.79a5.6 5.6 0 0 1 2.9 0c1.48-1 2.13-.79 2.13-.79.43 1.09.16 1.9.08 2.1.49.54.79 1.22.79 2.07 0 1.99-1.15 2.66-2.93 2.86.3.26.56.76.56 1.54 0 1.1-.01 1.99-.01 2.26 0 .21.15.46.55.38A7.99 7.99 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function BotMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <rect x="3.5" y="7.5" width="17" height="12" />
      <path d="M12 3.5v4M8 12.5h1.5M14.5 12.5H16M8.5 16.5h7" />
    </svg>
  );
}

export function InstallButton({
  size = "md",
  className,
  label = "Install Senior Dev Bot",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={INSTALL_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 bg-primary font-medium text-primary-foreground transition-all hover:opacity-90",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        size === "sm" && "px-3.5 py-2 text-xs",
        size === "md" && "px-5 py-3 text-sm",
        size === "lg" && "px-7 py-4 text-base",
        className,
      )}
    >
      <GithubMark className={cn(size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4")} />
      <span className="tracking-tight">{label}</span>
      <ArrowRight
        className={cn(
          "transition-transform group-hover:translate-x-0.5",
          size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4",
        )}
      />
    </a>
  );
}

export function GhostButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

export function Section({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-6 py-24 md:px-10 md:py-32",
        bordered && "border-t border-border",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-4xl", className)}>
      {eyebrow ? <p className="eyebrow mb-6">{eyebrow}</p> : null}
      <h2 className="font-display text-[2.5rem] leading-[0.98] font-semibold tracking-[-0.03em] text-balance md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Vertical technical pipeline of labelled nodes with animated connectors. */
export function Pipeline({
  steps,
  className,
  emphasizeLast = false,
}: {
  steps: string[];
  className?: string;
  emphasizeLast?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={cn("flex flex-col items-stretch", className)}>
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            style={{ transitionDelay: `${i * 90}ms` }}
            className={cn(
              "reveal w-full border border-border bg-surface/70 px-4 py-3 text-center font-mono text-[0.7rem] tracking-wide text-foreground uppercase md:text-xs",
              shown && "reveal-in",
              emphasizeLast &&
                i === steps.length - 1 &&
                "glow-soft border-border-strong bg-surface-raised",
            )}
          >
            {step}
          </div>
          {i < steps.length - 1 ? (
            <div className="relative h-8 w-px overflow-hidden bg-border">
              <span
                style={{ animationDelay: `${i * 200}ms` }}
                className="flow-pulse absolute inset-0 block bg-foreground/70"
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function DownArrow({ className }: { className?: string }) {
  return <ArrowDown className={cn("mx-auto my-3 h-4 w-4 text-muted-foreground", className)} />;
}

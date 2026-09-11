import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { GhostButton, GithubMark, InstallButton, Reveal } from "./primitives";

const DIFF: { kind: "ctx" | "add" | "del"; line: string }[] = [
  { kind: "ctx", line: "  def get_current_user(request):" },
  { kind: "del", line: "-     user = db.query(User).get(request.user_id)" },
  { kind: "add", line: "+     user = db.query(User).get(request.user_id)" },
  { kind: "add", line: "+     if not verify_token(request.headers['Authorization']):" },
  { kind: "add", line: "+         raise Unauthorized()" },
  { kind: "ctx", line: "      return user" },
];

const FILES = ["auth.py", "middleware/session.py", "models/user.py", "tests/test_auth.py"];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [reviewed, setReviewed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(DIFF.length);
      setReviewed(true);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    DIFF.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 500 + i * 260));
    });
    timers.push(setTimeout(() => setReviewed(true), 500 + DIFF.length * 260 + 500));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-20 md:px-10 md:pt-40">
      <div className="tech-grid-drift pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,oklch(1_0_0/0.08),transparent_70%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="eyebrow">AI code review for GitHub</p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="font-display mt-7 text-[3.25rem] leading-[0.92] font-semibold tracking-[-0.04em] text-balance sm:text-7xl lg:text-[5.25rem]">
              Your AI Senior Developer for GitHub.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display mt-6 max-w-xl text-xl leading-snug tracking-[-0.02em] text-muted-foreground md:text-2xl">
              Review every Pull Request with AI that understands your entire repository.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Senior Dev Bot analyzes code changes in the context of your existing codebase using
              Retrieval-Augmented Generation, then posts actionable review feedback directly on
              GitHub.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <InstallButton size="lg" />
              <GhostButton href="#how-it-works" className="py-4">
                See how it works ↓
              </GhostButton>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
              <GithubMark className="h-3.5 w-3.5" />
              Works directly with GitHub Pull Requests
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pt-6">
          <div className="glow-soft border border-border bg-surface/80 backdrop-blur-sm">
            {/* console chrome */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-[0.7rem] text-muted-foreground">
                <GithubMark className="h-3.5 w-3.5" />
                <span>acme/payments-api</span>
                <span className="text-border-strong">/</span>
                <span className="text-foreground">PR #142</span>
              </div>
              <span
                className={cn(
                  "border px-2 py-1 font-mono text-[0.6rem] tracking-[0.14em] uppercase transition-colors",
                  reviewed
                    ? "border-diff-add/50 text-diff-add"
                    : "border-border-strong text-muted-foreground",
                )}
              >
                {reviewed ? "Review complete" : "Analyzing…"}
              </span>
            </div>

            <div className="border-b border-border px-4 py-4">
              <h3 className="font-display text-lg tracking-[-0.02em]">
                feat: add authentication middleware
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {FILES.map((f) => (
                  <span
                    key={f}
                    className="border border-border px-2 py-1 font-mono text-[0.65rem] text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* diff */}
            <div className="overflow-x-auto border-b border-border bg-background/40 px-4 py-4">
              <pre className="font-mono text-[0.7rem] leading-6 md:text-xs">
                {DIFF.map((row, i) => (
                  <div
                    key={row.line}
                    className={cn(
                      "reveal whitespace-pre",
                      i < visibleLines && "reveal-in",
                      row.kind === "add" && "bg-diff-add/10 text-diff-add",
                      row.kind === "del" && "bg-diff-del/10 text-diff-del",
                      row.kind === "ctx" && "text-muted-foreground",
                    )}
                  >
                    {row.line}
                  </div>
                ))}
                <span className="caret inline-block h-4 w-[7px] translate-y-0.5 bg-foreground/80" />
              </pre>
            </div>

            {/* review comment */}
            <div
              className={cn(
                "reveal px-4 py-5",
                reviewed && "reveal-in",
                !reviewed && "pointer-events-none",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center border border-border-strong font-mono text-[0.6rem]">
                  S
                </span>
                <span className="font-mono text-[0.7rem] text-foreground">Senior Dev Bot</span>
                <span className="border border-sev-medium/50 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.12em] text-sev-medium uppercase">
                  Potential issue
                </span>
              </div>
              <p className="mt-3 font-mono text-[0.7rem] text-muted-foreground">auth.py:84</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground">
                Token validation occurs after the database query. This may allow unauthorized
                requests to reach protected resources.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="border-b border-border-strong pb-0.5 font-mono text-[0.7rem] text-foreground">
                  Suggested fix →
                </span>
                <span className="font-mono text-[0.7rem] text-muted-foreground">
                  [ View in GitHub ]
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

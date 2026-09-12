import {
  GhostButton,
  GithubMark,
  InstallButton,
  Pipeline,
  Reveal,
  Section,
  SectionHeading,
} from "./primitives";

const ISSUES = [
  {
    sev: "High",
    color: "text-sev-high border-sev-high/50",
    title: "Authentication bypass possible",
    file: "src/auth/service.py:84",
    body: "Token validation runs after the user lookup. A request with an invalid token can still trigger a privileged query.",
  },
  {
    sev: "Medium",
    color: "text-sev-medium border-sev-medium/50",
    title: "Missing error handling",
    file: "src/middleware/auth.py:31",
    body: "Session decode can raise on malformed cookies; the request will fail with a 500 instead of a 401.",
  },
  {
    sev: "Suggestion",
    color: "text-sev-low border-sev-low/50",
    title: "Simplify duplicated validation logic",
    file: "src/users/models.py:12",
    body: "This check already exists in validators.ensure_active_user — reuse it to keep behavior consistent.",
  },
];

export function ReviewExperience() {
  return (
    <Section>
      <SectionHeading
        eyebrow="In GitHub"
        title={<>The review lives where your code lives.</>}
        lead="Findings are posted as review comments on the Pull Request itself. Nothing is copied into another dashboard."
      />

      <Reveal delay={80} className="mt-14">
        <div className="border border-border bg-surface/60">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-[0.72rem]">
              <GithubMark className="h-3.5 w-3.5" />
              <span className="text-foreground">Senior Dev Bot reviewed this pull request</span>
            </div>
            <span className="border border-border-strong px-2 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase">
              3 issues found
            </span>
          </div>

          <div className="divide-y divide-border">
            {ISSUES.map((issue, i) => (
              <Reveal key={issue.title} delay={i * 90} className="px-5 py-6 md:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`border px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.12em] uppercase ${issue.color}`}
                  >
                    {issue.sev}
                  </span>
                  <h3 className="font-display text-lg tracking-[-0.02em]">{issue.title}</h3>
                </div>
                <div className="mt-4 overflow-x-auto border border-border bg-background/60 px-4 py-3">
                  <p className="font-mono text-[0.7rem] whitespace-pre text-muted-foreground">
                    {issue.file}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {issue.body}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="border-t border-border px-5 py-4 font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
            Posted automatically by Senior Dev Bot
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function InstallSection() {
  return (
    <Section className="tech-grid">
      <SectionHeading eyebrow="Installation" title={<>Install once. Review automatically.</>} />
      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
        {[
          { n: "01", t: "Install the GitHub App" },
          { n: "02", t: "Select your repositories" },
          { n: "03", t: "Open a Pull Request" },
        ].map((s, i) => (
          <Reveal key={s.n} delay={i * 80} className="bg-background">
            <div className="card-tech h-full border-0 p-10">
              <span className="font-display block text-5xl tracking-[-0.04em] text-muted-foreground md:text-6xl">
                {s.n}
              </span>
              <p className="font-display mt-8 text-xl leading-snug tracking-[-0.02em] md:text-2xl">
                {s.t}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-16 flex flex-col items-start gap-8">
          <p className="font-display max-w-2xl text-2xl leading-snug tracking-[-0.02em] md:text-4xl">
            Senior Dev Bot handles the review automatically.
          </p>
          <InstallButton size="lg" label="Install Senior Dev Bot on GitHub" />
        </div>
      </Reveal>
    </Section>
  );
}

const STACK = [
  "FastAPI",
  "GitHub Apps",
  "GitHub Webhooks",
  "Groq",
  "Gemini Embeddings",
  "Supabase",
  "pgvector",
  "RAG",
  "Python",
];

export function StackSection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
        <div>
          <SectionHeading eyebrow="Stack" title={<>Built for modern engineering teams.</>} />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
            {STACK.map((s, i) => (
              <Reveal key={s} delay={i * 45} className="bg-background">
                <div className="card-tech border-0 px-6 py-7 font-mono text-[0.72rem] tracking-[0.1em] uppercase">
                  {s}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:pt-10">
          <p className="eyebrow mb-6">Request path</p>
          <Pipeline
            steps={[
              "GitHub",
              "FastAPI",
              "Review Pipeline",
              "RAG + pgvector",
              "Groq LLM",
              "GitHub Review",
            ]}
            emphasizeLast
          />
        </div>
      </div>
    </Section>
  );
}

const TRUST = [
  "GitHub remains the source of truth for your code.",
  "Access is controlled entirely through GitHub App permissions.",
  "Repository data is used to provide review context.",
  "Reviews are posted directly to Pull Requests.",
  "No manual code uploads required.",
];

export function SecuritySection() {
  return (
    <Section id="security">
      <SectionHeading eyebrow="Trust" title={<>Designed for your codebase.</>} />
      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
        {TRUST.map((t, i) => (
          <Reveal
            key={t}
            delay={i * 60}
            className={`bg-background ${i === TRUST.length - 1 ? "md:col-span-2" : ""}`}
          >
            <div className="card-tech flex h-full items-start gap-5 border-0 p-8">
              <span className="font-mono text-[0.7rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-foreground">{t}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const METRICS = [
  { value: "1", label: "GitHub App" },
  { value: "∞", label: "Repository files understood through retrieval" },
  { value: "24/7", label: "Automated PR review" },
  { value: "1", label: "Source of truth — GitHub" },
];

export function MetricsSection() {
  return (
    <Section className="tech-grid">
      <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 70} className="bg-background">
            <div className="h-full p-10">
              <p className="font-display text-6xl leading-none tracking-[-0.05em] md:text-7xl">
                {m.value}
              </p>
              <p className="mt-8 font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_100%,oklch(1_0_0/0.07),transparent_70%)]" />
      <Reveal className="relative mx-auto max-w-4xl">
        <h2 className="font-display text-[2.75rem] leading-[0.95] font-semibold tracking-[-0.04em] text-balance md:text-7xl">
          Give every Pull Request a senior developer.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          Install Senior Dev Bot and let AI review your code before you merge.
        </p>
        <div className="mt-12 flex flex-col items-center gap-6">
          <InstallButton size="lg" label="Install on GitHub" />
          <GhostButton href="#how-it-works" className="border-0 px-0 py-0 text-sm hover:bg-transparent">
            <span className="border-b border-border-strong pb-0.5 font-mono text-[0.7rem] tracking-[0.14em] uppercase">
              View documentation
            </span>
          </GhostButton>
        </div>
      </Reveal>
    </Section>
  );
}

const FOOTER_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "RAG", href: "#rag" },
  { label: "GitHub", href: "https://github.com/apps/sr-dev-bot" },
  { label: "Documentation", href: "#how-it-works" },
  { label: "Privacy", href: "#security" },
  { label: "Terms", href: "#security" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-16 pb-24 sm:pb-16 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-[-0.01em]">Senior Dev Bot</p>
          <p className="mt-3 text-sm text-muted-foreground">AI-powered code review for GitHub.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-4">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-16 w-full max-w-7xl border-t border-border pt-6">
        <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
          © 2026 Senior Dev Bot
        </p>
      </div>
    </footer>
  );
}

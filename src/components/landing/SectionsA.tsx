import { Bug, GitBranch, Layers, Lock, RefreshCw, Zap } from "lucide-react";

import { Pipeline, Reveal, Section, SectionHeading } from "./primitives";

const PROBLEMS = [
  {
    title: "Changed Lines Aren't Enough",
    body: "A Pull Request can modify five lines while breaking behavior somewhere else in the repository.",
  },
  {
    title: "Context Matters",
    body: "A reviewer needs to understand functions, dependencies, patterns, and existing architecture.",
  },
  {
    title: "Senior Developers Are a Bottleneck",
    body: "Manual review takes valuable engineering time and can delay development.",
  },
];

export function ProblemSection() {
  return (
    <Section id="product">
      <SectionHeading
        eyebrow="The problem"
        title={<>Code review should understand the codebase.</>}
        lead="Traditional automated review looks at the diff in isolation. Most real defects depend on code the diff never touches."
      />
      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="bg-background">
            <div className="card-tech h-full border-0 p-8 md:p-10">
              <span className="font-mono text-[0.7rem] text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display mt-8 text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="font-display mt-16 max-w-3xl text-2xl leading-snug tracking-[-0.02em] md:text-4xl">
          Senior Dev Bot brings repository context into every review.
        </p>
      </Reveal>
    </Section>
  );
}

const STAGES = [
  "GitHub Pull Request",
  "Webhook",
  "Fetch PR Diff",
  "Retrieve Repository Context",
  "RAG",
  "LLM Analysis",
  "Actionable Findings",
  "GitHub Review",
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="How it works"
            title={<>From Pull Request to intelligent review.</>}
            lead="Every stage runs automatically. Developers keep working in GitHub — no new dashboard, no new workflow."
          />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              {
                n: "01",
                t: "Install",
                d: "Add the GitHub App and select the repositories you want reviewed.",
              },
              {
                n: "02",
                t: "Index",
                d: "Repository code is chunked, embedded, and stored as searchable knowledge.",
              },
              {
                n: "03",
                t: "Open a PR",
                d: "A webhook delivers the Pull Request event the moment it is opened.",
              },
              {
                n: "04",
                t: "Retrieve",
                d: "Semantic similarity surfaces the repository code that matters for this change.",
              },
              {
                n: "05",
                t: "Review",
                d: "Findings are posted as review comments on the exact lines they concern.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="bg-background">
                <div className="card-tech h-full border-0 p-7">
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {s.n} — {s.t}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:pt-10">
          <p className="eyebrow mb-6">Review pipeline</p>
          <Pipeline steps={STAGES} emphasizeLast />
        </div>
      </div>
    </Section>
  );
}

export function RagSection() {
  return (
    <Section id="rag" className="tech-grid">
      <SectionHeading
        eyebrow="Retrieval-augmented review"
        title={<>The difference is context.</>}
        lead="Senior Dev Bot doesn't treat a Pull Request as an isolated code snippet. It retrieves relevant parts of the repository before asking the AI to review the change."
      />

      <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-2">
        <Reveal className="bg-background/90 p-8 md:p-12">
          <p className="eyebrow mb-8">Architecture</p>
          <Pipeline
            steps={[
              "Repository",
              "Chunking",
              "Gemini Embeddings",
              "Supabase + pgvector",
              "Vector Knowledge Base",
              "Semantic Retrieval",
              "Relevant Repository Context",
              "LLM",
            ]}
            emphasizeLast
          />
        </Reveal>

        <Reveal delay={100} className="bg-background/90 p-8 md:p-12">
          <p className="eyebrow mb-8">Example</p>
          <div className="border border-border bg-surface/60 p-6 font-mono text-[0.72rem] leading-7">
            <p className="text-muted-foreground">PR changes</p>
            <p className="text-foreground">src/auth/service.py</p>
            <p className="my-2 text-muted-foreground">↓ retrieve relevant code</p>
            <ul className="space-y-1 text-foreground">
              <li>src/auth/token.py</li>
              <li>src/users/models.py</li>
              <li>src/middleware/auth.py</li>
              <li>tests/test_auth.py</li>
            </ul>
            <p className="my-2 text-muted-foreground">↓</p>
            <p className="text-foreground">AI Review</p>
          </div>
          <p className="font-display mt-10 text-xl leading-snug tracking-[-0.02em] md:text-2xl">
            Don't just ask AI what the code does. Give it the context to understand why it matters.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function MemorySection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Repository memory"
            title={<>Your repository becomes the AI's memory.</>}
            lead="Repositories are ingested once into a vector knowledge base. Commit and base SHA awareness lets Senior Dev Bot reuse existing repository knowledge instead of reprocessing the entire codebase for every Pull Request."
          />
          <Reveal delay={100}>
            <p className="font-display mt-12 border-l border-border-strong pl-6 text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
              Context is built once. Reviews become incremental.
            </p>
          </Reveal>
        </div>
        <Reveal delay={80} className="lg:pt-10">
          <Pipeline steps={["Repository", "Initial ingestion", "Knowledge Base"]} />
          <div className="mt-8 divide-y divide-border border border-border">
            {["PR #101", "PR #102", "PR #103"].map((pr) => (
              <div
                key={pr}
                className="flex items-center justify-between px-5 py-4 font-mono text-[0.72rem]"
              >
                <span className="text-foreground">{pr}</span>
                <span className="text-muted-foreground">→ reuse knowledge</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const FINDINGS = [
  { icon: Bug, t: "Bugs", d: "Potential logic errors and incorrect behavior." },
  {
    icon: GitBranch,
    t: "Breaking Changes",
    d: "Changes that can affect existing functionality elsewhere.",
  },
  { icon: Lock, t: "Security", d: "Suspicious or unsafe implementation patterns." },
  { icon: Zap, t: "Reliability", d: "Failure cases, edge cases, and robustness issues." },
  { icon: Layers, t: "Architecture", d: "Inconsistencies with existing repository patterns." },
  { icon: RefreshCw, t: "Code Quality", d: "Clearer, safer, more maintainable implementations." },
];

export function FindingsSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Coverage" title={<>Catch issues before they reach production.</>} />
      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FINDINGS.map((f, i) => (
          <Reveal key={f.t} delay={i * 60} className="bg-background">
            <div className="card-tech h-full border-0 p-8">
              <f.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              <h3 className="font-display mt-7 text-xl tracking-[-0.02em]">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

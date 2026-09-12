import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import {
  FindingsSection,
  HowItWorks,
  MemorySection,
  ProblemSection,
  RagSection,
} from "@/components/landing/SectionsA";
import {
  FinalCta,
  Footer,
  InstallSection,
  MetricsSection,
  ReviewExperience,
  SecuritySection,
  StackSection,
} from "@/components/landing/SectionsB";

const TITLE = "Senior Dev Bot — AI Pull Request Reviews for GitHub";
const DESCRIPTION =
  "Senior Dev Bot is a GitHub App that reviews Pull Requests with repository-aware RAG, posting actionable feedback on bugs, breaking changes, and security issues.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <RagSection />
        <MemorySection />
        <FindingsSection />
        <ReviewExperience />
        <InstallSection />
        <StackSection />
        <SecuritySection />
        <MetricsSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

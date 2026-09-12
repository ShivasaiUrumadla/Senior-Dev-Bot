# Contextual Code Review

Create a modern, premium, developer-focused single-page website for a GitHub App called **Senior Dev Bot**.

## Product

Senior Dev Bot is an AI-powered GitHub Pull Request Reviewer.

It automatically reviews GitHub Pull Requests by combining the current PR diff with relevant context from the existing repository using RAG (Retrieval-Augmented Generation).

The goal is to provide developers with **context-aware, actionable code-review feedback**, rather than reviewing changed lines in isolation.

The website's primary purpose is:

**Get users to install Senior Dev Bot on their GitHub repositories.**

The main CTA should be:

**Install Senior Dev Bot on GitHub**

This CTA should look like a real GitHub App installation button and should be visually dominant throughout the page.

---

# Design Direction

Take visual inspiration from the **Groq Platform** website:

* Premium developer/AI infrastructure aesthetic

* Dark background

* Extremely large typography

* Strong contrast

* Minimal but sophisticated layout

* Generous whitespace

* Subtle animated technical visuals

* Sharp cards and sections

* High-end startup/SaaS feeling

* Technical rather than playful

* Avoid generic AI landing-page design

* Avoid excessive gradients

* Avoid excessive rounded cards

* Avoid stock images

The site should feel like a serious developer infrastructure product.

Think:

**GitHub × AI Infrastructure × Developer Tools**

Use a dark near-black background with white/off-white typography and subtle electric accent colors.

Possible accent colors:

* GitHub green

* Electric blue

* Purple

* Subtle cyan

Use gradients very sparingly.

---

# Hero Section

Create a huge hero section immediately communicating the product.

Small eyebrow:

**AI CODE REVIEW FOR GITHUB**

Main headline:

**Your repository has context.

Your code reviewer should too.**

Alternative supporting headline:

**AI-powered Pull Request reviews that understand your entire codebase.**

Supporting paragraph:

Senior Dev Bot reviews Pull Requests using the changed code and relevant repository context, helping developers catch bugs, breaking changes, security issues, and implementation problems before they reach production.

Primary CTA:

**Install Senior Dev Bot on GitHub →**

Secondary CTA:

**See how it works**

Add a small trust line underneath:

**GitHub App · RAG-powered · Automated PR Reviews**

---

# Hero Visual

Do NOT use a generic illustration.

Create a sophisticated animated developer visualization showing:

GitHub PR

↓

PR Diff

↓

Repository Context

↓

Vector Knowledge Base

↓

AI Reviewer

↓

Review Comments

The visual should look like an AI/code intelligence pipeline.

Use subtle animated lines, particles, code snippets, file names, and nodes.

Example floating code/file labels:

`auth.py`

`database.py`

`api/routes.py`

`models/user.py`

`services/payment.py`

`PR #184`

The visual should communicate:

**The AI does not just look at the changed code.

It understands the surrounding repository.**

---

# Problem Section

Heading:

**Most AI code reviews see the PR.

Senior Dev Bot sees the repository.**

Explain the problem simply.

Traditional automated PR reviews often focus primarily on the changed lines.

But many bugs depend on existing code:

* Existing functions

* Dependencies

* Database models

* API contracts

* Authentication logic

* Shared utilities

* Existing implementation patterns

Show a visual comparison:

### Traditional AI Review

```text

PR Diff

   ↓

LLM

   ↓

Generic Review

```

### Senior Dev Bot

```text

PR Diff

   +

Repository Context

   ↓

RAG Retrieval

   ↓

LLM

   ↓

Context-Aware Review

```

Make Senior Dev Bot clearly stand out.

---

# How It Works

Heading:

**From Pull Request to actionable feedback.**

Create a 5-step horizontal/vertical technical flow.

### 01 — Install

Install Senior Dev Bot as a GitHub App and select the repositories you want to protect.

### 02 — Index

Senior Dev Bot processes repository code into searchable knowledge.

Show:

```text

Repository

↓

Chunking

↓

Embeddings

↓

Vector Database

```

### 03 — Open a PR

Developers continue using GitHub normally.

No new workflow is required.

### 04 — Retrieve Context

When a PR arrives, Senior Dev Bot retrieves the most relevant repository code using semantic similarity.

### 05 — Review

The LLM analyzes:

```text

PR Diff

+

Relevant Repository Context

↓

Actionable Findings

↓

GitHub Review Comments

```

Use animated connecting lines between the steps.

---

# RAG Section

This should be one of the most visually impressive sections.

Heading:

**The difference is context.**

Supporting text:

Senior Dev Bot uses Retrieval-Augmented Generation to give the AI relevant knowledge from the repository before it reviews the Pull Request.

Create a large interactive-looking architecture diagram:

Create a single-page, production-quality SaaS landing website for a product called Senior Dev Bot.

Senior Dev Bot is an AI-powered GitHub App that automatically reviews Pull Requests using repository-aware RAG. Its purpose is to act like an AI senior developer that reviews a junior developer’s code before the PR is merged.

The website should primarily drive one action:

Install Senior Dev Bot on GitHub

The website should feel like a serious developer infrastructure / AI platform product — not a generic startup landing page.

Reference / Visual Direction

Use https://groq.com/platform as the primary visual inspiration.

Do NOT copy Groq's branding, logo, text, illustrations, or exact layouts.

Instead, take inspiration from these characteristics:

Dark, premium developer-focused aesthetic

Large bold typography

Strong black / near-black backgrounds

High-contrast white typography

Subtle gray borders

Minimal visual clutter

Technical / infrastructure feel

Large section headings

Generous whitespace

Clean grid-based layouts

Repeated primary CTA

Product architecture presented visually

Technical metrics presented as large numbers

Subtle motion and interactive effects

Sophisticated rather than flashy

Modern AI infrastructure / developer-tool feeling

The result should feel like a product built for software engineers, engineering managers, and development teams.

Brand

Product name:

Senior Dev Bot

Primary positioning:

Your AI Senior Developer for GitHub.

Supporting message:

Automatically review Pull Requests with repository-aware AI that understands your codebase, not just the changed lines.

Suggested visual identity:

Background: near-black

Primary text: white

Secondary text: cool gray

Accent: GitHub-inspired or electric green/blue accent

Thin borders

Subtle gradients

Monospace typography for technical labels

Modern sans-serif typography for main headings

Avoid excessive gradients, cartoon illustrations, stock photos, or overly colorful SaaS visuals.

PAGE STRUCTURE

Build the website as one polished scrolling landing page.

1. Navbar

Sticky top navigation.

Left:

Senior Dev Bot

Use a small developer/robot-inspired symbol next to the name.

Center/right navigation:

Product

How it Works

RAG

Security

GitHub

Right-side CTA:

Install on GitHub

The CTA should visually stand out.

Navbar should become slightly more opaque / blurred while scrolling.

2. HERO SECTION

Create an extremely strong hero section inspired by modern developer infrastructure websites.

Small eyebrow:

AI CODE REVIEW FOR GITHUB

Main headline:

Your AI Senior Developer for GitHub.

Alternative supporting headline beneath it:

Review every Pull Request with AI that understands your entire repository.

Description:

Senior Dev Bot analyzes code changes in the context of your existing codebase using Retrieval-Augmented Generation, then posts actionable review feedback directly on GitHub.

Primary CTA:

Install Senior Dev Bot

Secondary CTA:

See how it works ↓

Add a small trust line underneath:

Works directly with GitHub Pull Requests

Hero visual

Instead of a stock illustration, create a sophisticated interactive developer interface.

Show a stylized GitHub Pull Request panel containing:

PR title

changed files

code diff

AI review comments

issue severity indicators

Example:

Pull Request #142

feat: add authentication middleware

Senior Dev Bot
────────────────────────────

⚠ Potential Issue

auth.py:84

Token validation occurs after
the database query.

This may allow unauthorized
requests to reach protected
resources.

Suggested fix →

[View in GitHub]


Make this look like a futuristic developer console.

Add subtle animation such as:

code lines appearing

review comments sliding in

glowing cursor

status changing from "Analyzing" → "Review Complete"

Do not make the animation distracting.

3. PROBLEM SECTION

Large heading:

Code review should understand the codebase.

Explain the problem with traditional AI code review.

Create three large cards:

Changed Lines Aren't Enough

A Pull Request can modify five lines while breaking behavior somewhere else in the repository.

Context Matters

A reviewer needs to understand functions, dependencies, patterns, and existing architecture.

Senior Developers Are a Bottleneck

Manual review takes valuable engineering time and can delay development.

End the section with:

Senior Dev Bot brings repository context into every review.

4. HOW IT WORKS

Large heading:

From Pull Request to intelligent review.

Show a horizontal / vertical technical pipeline.

Use these exact stages:

GitHub Pull Request
        ↓
Webhook
        ↓
Fetch PR Diff
        ↓
Retrieve Repository Context
        ↓
RAG
        ↓
LLM Analysis
        ↓
Actionable Findings
        ↓
GitHub Review


Each stage should be represented as a clean technical node.

Add subtle connecting lines and motion.

When the user scrolls into this section, animate the pipeline sequentially.

5. RAG SECTION

This is one of the most important sections.

Heading:

The difference is context.

Supporting text:

Senior Dev Bot doesn't treat a Pull Request as an isolated code snippet. It retrieves relevant parts of the repository before asking the AI to review the change.

Create a visually sophisticated architecture diagram:

Repository
    ↓
Chunking
    ↓
Gemini Embeddings
    ↓
Supabase + pgvector
    ↓
Vector Knowledge Base
    ↓
Semantic Retrieval
    ↓
Relevant Repository Context
    ↓
LLM


Show an example:

PR changes

src/auth/service.py
        ↓
retrieve relevant code
        ↓
src/auth/token.py
src/users/models.py
src/middleware/auth.py
tests/test_auth.py
        ↓
AI Review


Use glowing connection lines, subtle grid backgrounds, and a technical visualization aesthetic.

Add a highlighted statement:

Don't just ask AI what the code does. Give it the context to understand why it matters.

6. REPOSITORY MEMORY / SHA AWARENESS

Create a dedicated section.

Heading:

Your repository becomes the AI's memory.

Explain that repositories are ingested into a vector knowledge base and that the system uses commit/base SHA awareness to reuse existing repository knowledge instead of unnecessarily reprocessing the entire repository for every Pull Request.

Show:

Repository
     ↓
Initial ingestion
     ↓
Knowledge Base

PR #101 → reuse knowledge
PR #102 → reuse knowledge
PR #103 → reuse knowledge


Highlight:

Context is built once. Reviews become incremental.

Make this feel like infrastructure rather than marketing.

7. WHAT SENIOR DEV BOT FINDS

Heading:

Catch issues before they reach production.

Create a grid of review categories.

Cards:

🐛 Bugs

Potential logic errors and incorrect behavior.

🔗 Breaking Changes

Identify changes that can affect existing functionality.

🔐 Security

Highlight suspicious or unsafe implementation patterns.

⚡ Reliability

Identify failure cases, edge cases, and robustness issues.

🧩 Architecture

Detect inconsistencies with existing repository patterns.

♻ Code Quality

Suggest clearer, safer, and more maintainable implementations.

Do not overuse emoji. Prefer small minimalist icons or technical glyphs.

8. REAL GITHUB REVIEW EXPERIENCE

Heading:

The review lives where your code lives.

Show a realistic GitHub-style Pull Request interface.

Display:

Senior Dev Bot reviewed this pull request

3 issues found

🔴 High
Authentication bypass possible

🟡 Medium
Missing error handling

🔵 Suggestion
Simplify duplicated validation logic


Show comments attached directly to code lines.

Include a small label:

Posted automatically by Senior Dev Bot

The visual should make it immediately obvious that users do not need to copy code into another dashboard.

9. INSTALLATION SECTION

This is the main conversion section.

Heading:

Install once. Review automatically.

Show a simple 3-step flow.

01

Install the GitHub App

02

Select your repositories

03

Open a Pull Request

Then:

Senior Dev Bot handles the review automatically.

Large CTA:

Install Senior Dev Bot on GitHub →

This button should link to the GitHub App installation URL.

Make this section visually powerful and spacious.

10. TECHNICAL STACK SECTION

Heading:

Built for modern engineering teams.

Create a technical stack grid:

FastAPI
GitHub Apps
GitHub Webhooks
Groq
Gemini Embeddings
Supabase
pgvector
RAG
Python


Present these as clean technical labels rather than colorful logos.

Add a small architecture summary:

GitHub
  ↓
FastAPI
  ↓
Review Pipeline
  ↓
RAG + pgvector
  ↓
Groq LLM
  ↓
GitHub Review


11. TRUST / SECURITY SECTION

Heading:

Designed for your codebase.

Explain at a high level:

GitHub remains the source of truth

Access is controlled through GitHub App permissions

Repository data is used to provide review context

Reviews are posted directly to Pull Requests

No manual code uploads required

Use clean technical cards.

Do not make unsupported claims such as "military-grade security", "zero data retention", or "SOC 2 certified" unless those features actually exist.

12. METRICS / TECHNICAL STATS

Create a Groq-inspired large numerical section, but only use honest product metrics.

Do NOT invent fake performance numbers.

Use conceptual metrics instead:

1
GitHub App

∞
Repository files understood through retrieval

24/7
Automated PR review

1
Source of truth — GitHub

These should be styled as oversized typography with subtle separators.

13. FINAL CTA

Large centered heading:

Give every Pull Request a senior developer.

Supporting text:

Install Senior Dev Bot and let AI review your code before you merge.

Primary CTA:

Install on GitHub →

Secondary small link:

View documentation

14. FOOTER

Footer should be minimal.

Left:

Senior Dev Bot

Tagline:

AI-powered code review for GitHub.

Links:

Product
How It Works
RAG
GitHub
Documentation
Privacy
Terms

Bottom:

© 2026 Senior Dev Bot

INTERACTION DESIGN

Use subtle premium interactions throughout the page.

Implement:

Smooth scrolling

Sticky navbar

Fade/slide-in sections

Text reveal animations

Hover effects on technical cards

Animated pipeline connections

Code diff animations

GitHub review comment animations

Subtle background grid movement

Button hover transitions

Soft glow around important technical elements

Animations should be fast and restrained.

The website must still feel excellent with animations disabled.

RESPONSIVE DESIGN

Desktop:

Wide layout

Large typography

Technical diagrams

Spacious sections

Tablet:

Reflow grids

Reduce diagram complexity

Mobile:

Single-column layout

Simplified architecture diagrams

Sticky bottom or top CTA for "Install on GitHub"

Code panels horizontally scrollable where necessary

Maintain strong typography hierarchy

UX PRIORITY

The entire website should answer these questions quickly:

What is Senior Dev Bot?

Why is it different from a normal AI code reviewer?

How does RAG give it repository context?

How does it work with GitHub?

What types of issues can it detect?

How do I install it?

The Install on GitHub action should be visible in the navbar, hero, installation section, and final CTA.

COPY STYLE

Use concise, confident, technical copy.

Avoid generic startup phrases such as:

"Revolutionize your development workflow."

"Take your productivity to the next level."

"Unlock the future of software development."

Instead use direct developer-oriented language such as:

Review the PR. Understand the context. Catch the issue.

Your codebase is the context.

AI review that sees beyond the diff.

Every Pull Request gets a second pair of senior eyes.

VISUAL QUALITY BAR

The final result should feel like a combination of:

AI infrastructure company

Developer tooling platform

GitHub-native engineering product

Reference the visual sophistication of Groq Platform, but make Senior Dev Bot clearly its own brand.

Do not make it look like a template.

Use strong editorial layouts, oversized typography, technical diagrams, code interfaces, subtle borders, and high-quality motion.

The final website should look credible enough that a professional software engineer would trust installing the GitHub App.

                 Git

```

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d692d7d2-da8f-4c21-896c-32c21c125eaf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# Senior Dev Bot — developer-infrastructure landing page

A single, long-scrolling dark page for the Senior Dev Bot GitHub App, built to drive one action: installing it on GitHub. Visual register: near-black canvas, oversized editorial headlines, monospace technical labels, hairline borders, white-only accent (no colored brand tint), restrained motion.

## Look and feel

- Background near-black, text white/off-white, secondary text cool gray.
- Accent is white: glowing white lines, white pill CTAs on dark, inverted dark-on-white for the primary install button so it dominates.
- Two typefaces: a bold geometric sans for headlines, a monospace for eyebrows, labels, diagrams and code.
- Sharp corners, thin borders, wide section rules, generous vertical space. No stock imagery, no gradient washes, no rounded card soup.
- Subtle animated grid backdrop, sequential reveal of diagrams on scroll, hover lift on technical cards. Everything still reads correctly with motion disabled.

## Page sections (in order)

1. Sticky nav — wordmark with a small glyph, links (Product, How it Works, RAG, Security, GitHub), install button; blurs and tightens on scroll.
2. Hero — eyebrow "AI CODE REVIEW FOR GITHUB", headline "Your AI Senior Developer for GitHub.", supporting line, description, primary install CTA + "See how it works", trust line.
3. Hero visual — a stylized GitHub Pull Request console: PR #142 title, changed files, animated diff lines, a Senior Dev Bot review comment on auth.py:84 with severity chip, status stepping from "Analyzing" to "Review Complete".
4. Problem — "Code review should understand the codebase." plus three large cards and a closing statement.
5. How it works — vertical/horizontal pipeline of the eight named stages, animated sequentially on scroll.
6. RAG — "The difference is context." with the full architecture diagram (Repository → Chunking → Gemini Embeddings → Supabase + pgvector → Vector Knowledge Base → Semantic Retrieval → Context → LLM), a concrete retrieval example, and the highlighted statement.
7. Repository memory / SHA awareness — ingest-once diagram, reuse across PR #101–103, highlight "Context is built once. Reviews become incremental."
8. What it finds — six-cell grid (Bugs, Breaking Changes, Security, Reliability, Architecture, Code Quality) with minimal glyphs, no emoji.
9. GitHub review experience — realistic review panel with 3 findings at High / Medium / Suggestion severity, comments attached to code lines, "Posted automatically by Senior Dev Bot".
10. Installation — "Install once. Review automatically." 3 numbered steps and the dominant install CTA.
11. Technical stack — clean monospace label grid plus the compact architecture summary.
12. Trust / security — five honest, high-level points as technical cards; no certification or retention claims.
13. Metrics — oversized conceptual figures (1 GitHub App, ∞ files, 24/7, 1 source of truth) separated by hairlines.
14. Final CTA — "Give every Pull Request a senior developer." with install button and a small "View documentation" link.
15. Footer — minimal: wordmark, tagline, link row, © 2026.

## Behavior details

- Every install CTA (nav, hero, installation, final) links to https://github.com/apps/pr-review-pro-max and opens in a new tab.
- Section links scroll smoothly to their anchors; "See how it works" jumps to How it works.
- Footer Documentation / Privacy / Terms are non-navigating for now (single page only, as chosen).
- Mobile: single column, simplified diagrams, horizontally scrollable code panels, a persistent install bar.

## Technical notes

- Rewrite `src/routes/index.tsx` as the page, composed from section components under `src/components/landing/`.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`; dark theme tokens, mono/display font tokens, grid and glow utilities added to `src/styles.css` (no hardcoded color classes in components).
- Scroll reveals and pipeline sequencing via a small intersection-observer hook plus CSS transitions/keyframes; `prefers-reduced-motion` short-circuits to final state.
- Route-level `head()` on index with product-specific title, description, og/twitter tags.

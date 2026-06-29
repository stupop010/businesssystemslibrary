# Decision: Technology Stack

Date: 2026-06-29
Phase: Phase 1 - Foundation (task: "Decide technology stack")
Status: Decided

## Decision

| Layer | Choice |
|---|---|
| Frontend | Astro + TypeScript |
| Content | Markdown/MDX in Git, schema-enforced via Astro Content Collections |
| Editing UI | Keystatic (added later, when a visual editor is wanted; still writes to the repo) |
| Hosting | Cloudflare Pages (global CDN). hermes server = staging / future backend |
| Search | Pagefind first; Algolia only if outgrown |
| Analytics | Plausible + Google Search Console |
| Future app layer (Phase 9-10 only) | Supabase (auth/db/vectors), Stripe (payments), Anthropic/OpenAI (AI features) |

## Rationale

A 5-agent stochastic consensus recommended Astro + Sanity + Cloudflare/Vercel.
We adopted everything EXCEPT Sanity, choosing file-based Markdown/MDX in Git
instead, because:

1. The charter's "think in decades / build assets in Git / founder's compounding
   learning" philosophy argues against storing the core knowledge asset in a
   proprietary hosted content lake. File-based content has no lock-in to mitigate.
2. The workflow is solo-founder + AI, not a multi-editor newsroom. AI operates
   far better directly on Markdown files in a repo than through a CMS API.
   Sanity's main advantage (team editorial governance) does not apply yet.
3. The panel's own stated top risk -- over-modeling the schema before the
   plumbing-company model is proven -- favors cheap-to-evolve file frontmatter
   over a committed Sanity Studio schema.

Keystatic is the chosen path if/when a visual editor is wanted: it gives a
CMS-like editing UI while still committing Markdown/MDX to the Git repo, so
ownership is preserved.

User confirmed the content-layer choice ("Me + AI, files in Git") on 2026-06-29.

## Deciding factor that could revisit this

If multiple non-technical writers are onboarded, reconsider Keystatic-from-day-one
or Sanity for editorial governance.

## Next step

Define the v1 article content schema (turn the 14-section writing standard into
the Content Collections data model) BEFORE scaffolding. Keep the schema tight;
expand only when real content patterns from the plumbing-company model demand it.

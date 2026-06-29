# Business Systems Library

A structured reference library explaining how businesses actually work —
practical operating systems, SOPs, workflows, checklists, KPIs, and AI/automation
opportunities for service businesses with 5–50 employees.

Built as a fast, SEO-first knowledge platform, not a blog.

## Tech stack

- **Astro** + TypeScript (static-first, grows into interactivity/AI without a rewrite)
- **Markdown/MDX content in Git** — schema-enforced via Astro Content Collections
- **Cloudflare Pages** hosting (planned)
- **Pagefind** search (planned)

See `decisions/2026-06-29-tech-stack.md` for the full rationale.

## Project layout

```
src/
  content.config.ts        Content schema (the article data model)
  content/systems/         One .mdx file per operating-system article
  layouts/                 Page shells
  pages/                   Homepage + dynamic article routes
  styles/                  Global CSS
public/                    Static assets (favicon, etc.)
AGENTS.md, ROADMAP.md      Project context & build roadmap
decisions/, validation/    Decision records and validation notes
```

Each article follows a fixed 14-section writing standard (What is this? → Why it
matters → Steps → Flowchart → KPIs → SOP template → Related systems → References).

## Develop

```bash
npm install        # first time
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # preview the production build
```

> If `npm install` fails with a certificate error, prefix with
> `NODE_OPTIONS=--use-system-ca` (HTTPS interception on this machine).

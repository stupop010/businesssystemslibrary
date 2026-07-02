# Business Systems Library - Claude Context

Read `AGENTS.md` first. It is the canonical project context for this folder.

Current phase: Phase 1 - Foundation.

Important rules:

- Do not jump into writing articles.
- Build systems before pages.
- Treat this as a structured reference library, not a blog.
- Primary audience: service businesses with 5-50 employees.
- Initial model business: plumbing company with approximately 15 employees.
- Brand voice: clear, practical, specific, calm, and free of hype.

Current v1 technology stack:

- Astro + TypeScript
- Markdown/MDX in Git
- Astro Content Collections for schema enforcement
- Cloudflare Pages hosting
- Pagefind later for search
- Keystatic later only if a visual editor is needed

Git workflow hard rule:

- Always work on `dev`.
- Never work directly on `main`.
- Never merge into `main`.
- Never push `main`.
- `main` deploys to Cloudflare Pages; only the user controls when changes reach it.

See:

- `ROADMAP.md`
- `FOUNDATION-CHECKLIST.md`
- `decisions/2026-06-29-tech-stack.md`

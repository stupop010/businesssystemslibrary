# Business Systems Library - Project Context

## Mission

BusinessSystemsLibrary.com is a committed long-term project to build the world's
most comprehensive, practical, and trusted library explaining how businesses
actually work.

This is not a typical blog. Treat it as a structured reference library:
interconnected pages, evergreen explanations, reusable systems, SOPs, workflows,
checklists, KPIs, templates, and AI automation opportunities.

## Primary Goal

The first goal is learning, not quick monetization.

Every page should make the user better at understanding, explaining, and
operating businesses. Traffic, products, membership, courses, and community can
come later if the knowledge base becomes genuinely useful.

## Build Philosophy

Think in decades. Build systems, not pages. Build assets, not content.

Do not jump into writing articles. Each major stage should be completed before
moving to the next. The project should be built properly from the ground up:
foundation, brand, information architecture, content standards, research system,
technical build, then initial content.

Codex should act as senior product manager, senior software engineer, senior
information architect, senior UX designer, technical SEO expert, knowledge
management consultant, business analyst, and operations consultant. Challenge
ideas, improve structure, identify weaknesses, and optimize for the strongest
long-term business knowledge platform.

## Positioning

Practical systems, SOPs, and automations for service businesses with 5-50
employees. From first lead to final payment.

Business Systems Library helps service businesses with 5-50 employees build
better systems, improve operations, and grow through practical processes, SOPs,
workflows, checklists, and AI automation.

Short description: Business Systems Library is a structured reference for how
service businesses actually run: the SOPs, workflows, checklists, KPIs, and AI
automation opportunities that help 5-50 person teams operate more consistently.
Every system follows the same practical format: what it is, why it matters, how
to implement it, and how to measure it. Built to look up, reuse, and apply in
real operations.

Think:

- Wikipedia for business systems
- GitHub for reusable operating templates
- Business school curriculum made practical
- Consultant playbooks made accessible
- AI workflow library for real operations

The moat is structure, usefulness, consistency, and the founder's compounding
learning journey.

## Target Audience

Primary audience: service-based businesses with 5-50 employees that want to
improve operations, systems, and efficiency.

Typical industries:

- Plumbing
- Electrical
- HVAC
- Landscaping
- Cleaning
- Roofing
- Construction
- Property maintenance
- Locksmiths
- Tree surgeons
- Painting and decorating
- Security installers
- IT support
- Marketing agencies
- Accountancy firms
- Recruitment agencies
- Law firms

These businesses share many core operating systems:

- Marketing
- Lead capture
- Sales
- Quoting
- Scheduling
- Job delivery
- Invoicing
- Payment collection
- Customer service
- Hiring
- Staff management
- Reporting

This commonality lets the library create practical content that applies across
multiple service industries without becoming generic.

## Writing Standard

Every article should answer:

1. What is this?
2. Why does it matter?
3. When should it be used?
4. Step-by-step process
5. Flowchart
6. Common mistakes
7. KPIs
8. Software recommendations
9. AI opportunities
10. Automation ideas
11. Checklist
12. SOP template
13. Related systems
14. References

Use trusted sources. AI can assist research, comparison, outlining, and
summarization, but should never be treated as the source.

## Source Hierarchy

Prefer:

- Books on business, operations, sales, finance, leadership, Lean, Six Sigma,
  supply chain, CRM, and process improvement
- University courses, lecture notes, and MBA-style materials
- Government business guidance
- Business software company education from operators like HubSpot, Salesforce,
  Stripe, QuickBooks, Xero, Shopify, Asana, ClickUp, Monday, and Notion
- Experienced consultants and operators
- Academic research where useful
- Podcasts as raw notes, not authority

## Initial Wedge

For the first 6-12 months, build the library around one model business:

A plumbing company with approximately 15 employees.

Map the full operating system from customer call to lead capture, quoting,
scheduling, service delivery, invoicing, payment, follow-up, retention,
management reporting, and AI/automation opportunities.

Expand from that practical base into other service industries using the same
framework.

Important: this wedge belongs to Phase 7 Initial Content. Do not begin writing
plumbing-company articles until the earlier phases are complete.

## Top-Level Taxonomy

Initial category map:

- Sales
- Marketing
- Operations
- Finance
- Human Resources
- Customer Service
- IT
- Leadership
- Strategy
- Legal
- Supply Chain
- Procurement
- Inventory
- AI
- Automation
- SOPs
- Templates
- Checklists
- Glossary
- Business Frameworks
- Business Models
- Industries

## Design Direction

Minimal, professional, clean, fast, and easy to navigate. It should feel like
documentation and reference material rather than a blog or magazine.

## Brand Voice

Business Systems Library should sound clear, practical, specific, and calm. It
should read like a well-made operations manual written by someone who
understands service businesses.

Use plain English, real roles, real steps, and real numbers. Prove authority
through useful detail, not big claims.

Use third person for reference content: "The dispatcher assigns the job..." Use
first person only on homepage/About where needed: "We are mapping..."

Avoid hype, guru language, filler, clever headlines, exclamation marks, and vague
business words like "unlock," "transform," "world-class," or "game-changing."

## Success Metrics

In year one, success is not primarily traffic. Judge it by:

- Did the user become significantly better at understanding how businesses work?
- Did the project create an exceptional knowledge base?
- Does the asset compound every month?
- Did each article make the user and reader smarter?

## Current Roadmap

See `ROADMAP.md`. Current phase: Phase 1 - Foundation.

## Technology Stack

Current v1 stack is documented in `decisions/2026-06-29-tech-stack.md`.

- Frontend: Astro + TypeScript
- Content: Markdown/MDX in Git, schema-enforced with Astro Content Collections
- Hosting: Cloudflare Pages
- Search: Pagefind later, Algolia only if outgrown
- Editing UI: Keystatic later if a visual editor is needed
- Future app layer: Supabase, Stripe, and AI services only in later premium/AI phases

Do not introduce Next.js, Vercel, Sanity, WordPress, Webflow, Ghost, or
Notion-as-CMS unless the decision record is revisited. The current reasoning is:
the core asset should stay portable in Git, the workflow is user + AI rather
than a multi-editor newsroom, and the content schema should remain easy to
evolve while the plumbing-company model is being proven.

## Git Workflow

Hard rule: always work on the `dev` branch. Never work directly on `main`, never
merge into `main`, and never push the `main` branch.

`main` is the deploy branch for Cloudflare Pages. Changes should be made on
`dev`; only the user controls if and when anything reaches `main`.

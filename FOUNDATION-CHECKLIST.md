# Business Systems Library - Foundation Checklist

Use this checklist before building the first real version of the site.

## Brand Basics

- [x] Final name: Business Systems Library
- [x] Final domain: businesssystemslibrary.com
- [x] Tagline / positioning line
- [x] Short description
- [x] Brand voice: clear, practical, trustworthy, not hypey
- [x] Primary audience confirmed: service businesses with 5-50 employees
- [x] Initial model business confirmed: plumbing company with approximately 15 employees

## Accounts / Ownership

- [x] Domain ownership confirmed
- [ ] Social media handles checked
- [ ] Social media handles secured where useful
- [x] X / Twitter handle secured: bizsystemslib
- [x] GitHub handle secured: bizsystemslib
- [x] YouTube handle secured: bizsystemslib
- [ ] LinkedIn Page blocked: main account needs more connections before page creation is allowed
- [x] Google Search Console property created
- [x] Domain email provider chosen: Cloudflare Email Routing
- [x] Primary email address created: hello@businesssystemslibrary.com forwards to Gmail
- [ ] Password / account ownership stored safely outside this repo

## Visual Identity

- [ ] Logo
- [ ] Colour palette
- [ ] Typography
- [ ] Icon style
- [ ] Favicon
- [ ] Open Graph / social preview image style

Note: full visual identity belongs mainly to Phase 2. For Phase 1, only rough
direction is needed.

## Design System

- [ ] Buttons
- [ ] Links
- [ ] Cards
- [ ] Tables
- [ ] Navigation
- [ ] Search box
- [ ] Tags / labels
- [ ] Callout boxes
- [ ] Article layout
- [ ] Checklist layout
- [ ] SOP template layout
- [ ] Process / workflow diagram style

Note: full design system belongs to Phase 2. Do not block Phase 1 on perfect UI
components.

## Website Structure

- [ ] Homepage sections
- [ ] Main navigation
- [ ] Category pages
- [ ] Article pages
- [ ] Search page
- [ ] Resource / template pages
- [ ] About page
- [ ] Contact page
- [ ] Footer

Note: detailed website structure belongs to Phase 3 Information Architecture.
For Phase 1, capture only obvious required pages.

## Content System

- [ ] Article structure
- [ ] SOP structure
- [ ] Checklist structure
- [ ] Workflow structure
- [ ] Process page structure
- [ ] Citation / reference format
- [ ] Related articles format
- [ ] Version history format

Note: detailed content standards belong to Phase 4. Do not start writing
articles yet.

## Technical Setup

- [x] Technology stack documented: Astro + TypeScript on Cloudflare Pages for v1
- [x] Astro project
- [x] Sanity not used for v1: Markdown/MDX in Git chosen instead
- [x] Hosting chosen: Cloudflare Pages
- [x] Domain configuration: HTTPS and www redirect to root verified
- [x] Email
- [x] Git repository: project-local repo at business-systems-library/
- [x] Local development environment
- [x] Environment variables plan: none required for static Astro v1
- [x] Deployment workflow: always work on `dev`; never merge or push `main`; `main` auto-deploys Cloudflare Pages with `npm run build`, output `dist`
- [x] Sitemap: Astro sitemap integration configured with site URL
- [x] Robots.txt: temporarily blocks crawling until v1 is ready
- [ ] Google Search Console

## Project Documentation

- [x] README
- [x] Tech stack decision note
- [ ] Brand foundation note
- [ ] Create future skill: review draft content against Business Systems Library brand voice
- [ ] Decision log
- [ ] Setup instructions
- [ ] Roadmap linked from README
- [ ] Foundation checklist reviewed

## Phase Gate

- [ ] Phase 1 Foundation complete
- [ ] Ready to move into Phase 2 Brand Identity

## Current Brand Copy

Working tagline / positioning line:

> Practical systems, SOPs, and automations for service businesses with 5-50 employees. From first lead to final payment.

Working short description:

> Business Systems Library is a structured reference for how service businesses actually run: the SOPs, workflows, checklists, KPIs, and AI automation opportunities that help 5-50 person teams operate more consistently. Every system follows the same practical format: what it is, why it matters, how to implement it, and how to measure it. Built to look up, reuse, and apply in real operations.

## Brand Voice Guidance

Business Systems Library should sound clear, practical, specific, and calm. It
should read like a well-made operations manual written by someone who
understands service businesses.

Use plain English, real roles, real steps, and real numbers. Prove authority
through useful detail, not big claims.

Use third person for reference content: "The dispatcher assigns the job..." Use
first person only on homepage/About where needed: "We are mapping..."

Avoid hype, guru language, filler, clever headlines, exclamation marks, and vague
business words like "unlock," "transform," "world-class," or "game-changing."

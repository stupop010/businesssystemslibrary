import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Top-level taxonomy (from AGENTS.md). Kept tight on purpose for v1 -- expand
// only when real content patterns demand it.
export const CATEGORIES = [
  'Sales',
  'Marketing',
  'Operations',
  'Finance',
  'Human Resources',
  'Customer Service',
  'IT',
  'Leadership',
  'Strategy',
  'Legal',
  'Supply Chain',
  'Procurement',
  'Inventory',
  'AI',
  'Automation',
] as const;

// A "system" = one operating-system article (the core unit of the library).
// The 14-section writing standard lives in the MDX body as a fixed template;
// the schema below enforces only the metadata that benefits from being
// structured data (taxonomy, the knowledge graph, SEO, publish state).
const systems = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/systems' }),
  schema: z.object({
    title: z.string(),
    // SEO meta description -- capped so it never overflows the SERP snippet.
    description: z.string().max(160),
    category: z.enum(CATEGORIES),
    // Nothing is live by accident.
    status: z.enum(['draft', 'published']).default('draft'),
    updated: z.coerce.date(),
    // One-paragraph "what is this" shown under the title.
    summary: z.string().optional(),
    // Slugs of related systems -> this is what makes it a knowledge graph
    // instead of a pile of pages.
    relatedSystems: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { systems };

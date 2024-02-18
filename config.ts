import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const program = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      languages: z.array(z.string()),
      contributors: z.array(z.string()),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      trackId: z.number(),
    }),
});

const tldr = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      pageid: z.number(),
      title: z.string(),
      description: z.string(),
      short_summary: z.string(),
    }),
});

export const collections = { post, program, tldr };

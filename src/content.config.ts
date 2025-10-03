import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(), // coerce to Date object
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { posts };

import { defineCollection, z } from 'astro:content';

  const projects = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.enum(['design', 'writing', 'education']),
      extraCategory: z.enum(['design', 'writing', 'education']).optional(),
      year: z.number(),
      description: z.string().optional(),
      thumbnail: z.string().optional(),
      hasDetail: z.boolean().default(false),
      client: z.string().optional(),
      role: z.string().optional(),
      cover: z.string().optional(),
      externalUrl: z.string().optional(),
      intro: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      order: z.number().default(0),
      crossRef: z.string().optional(),
      crossRefCategory: z.enum(['design', 'writing', 'education']).optional(),
    }),
  });

  const pages = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  });

  export const collections = { projects, pages };
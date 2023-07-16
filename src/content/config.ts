import { z, defineCollection } from "astro:content"

export const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      added: z.date(),
      image: image(),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      link: z.string().nullable(),
      source: z.string(),
    }),
})

export const collections = {
  projects: projectsCollection,
}

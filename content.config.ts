import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
})

const commonProjectSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  release: z.string().nonempty(),
  date: z.string().nonempty(),
  featured: z.boolean().optional(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      title: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

export const collections = {
  content_nl: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'nl/**/*.md',
        exclude: ['nl/articles/*.md'],
        prefix: '/nl',
      },
      schema: commonContentSchema,
    }),
  ),
  content_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/**/*.md',
        exclude: ['fr/articles/*.md'],
        prefix: '/fr',
      },
      schema: commonContentSchema,
    }),
  ),
  articles_nl: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'nl/articles/*.md',
        prefix: '/nl/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  articles_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/articles/*.md',
        prefix: '/fr/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  projects_nl: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'nl/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  projects_fr: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'fr/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_nl: defineCollection({
    type: 'data',
    source: 'nl/faq.json',
    schema: commonFaqSchema,
  }),
  faq_fr: defineCollection({
    type: 'data',
    source: 'fr/faq.json',
    schema: commonFaqSchema,
  }),
}

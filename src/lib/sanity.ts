import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for better performance
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  publishedAt,
  category,
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
}`

export const linksQuery = `*[_type == "link"] | order(publishedAt desc) {
  _id,
  title,
  url,
  description,
  publishedAt,
  tags
}`
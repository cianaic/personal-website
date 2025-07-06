import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import link from './link'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, link],
}

import { type SchemaTypeDefinition } from 'sanity'
import {ProductSchema} from './product'
import {categorySchema} from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema,categorySchema],
}

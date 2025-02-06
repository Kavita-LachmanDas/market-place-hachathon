import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'

import {authorType} from './authorType'

import { postType } from './postType'
import { card2 } from './product'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,card2, categoryType,  postType, authorType],
}
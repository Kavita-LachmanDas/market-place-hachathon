import { type SchemaTypeDefinition } from 'sanity'
import { header } from '../header'
import { hero } from '../hero'
// import { card } from '../card'
import { nextCard } from '../nextCard'

import { same } from '../same'
import { card3 } from '../card3'
// import { card2 } from '../card2'
import { veiwAllPost } from './veiwallpost'
import { footer } from '../footer'
import { follow } from '../follow'
import { card4 } from '../card4'
import product from './product'
import { card } from './card'
import { card2 } from './card2'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header,hero,card,nextCard ,card2,same  , card3,veiwAllPost,follow,footer,card4,product],
}

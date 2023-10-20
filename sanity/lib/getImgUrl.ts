import {client} from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export default function getImgUrl(source:any) {
  return builder.image(source)
}
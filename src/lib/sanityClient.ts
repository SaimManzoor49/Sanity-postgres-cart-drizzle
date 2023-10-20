import {createClient} from 'next-sanity'

export const client = createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN_EDITOR,
    apiVersion:'2023-10-19',
    dataset:'production',
    useCdn : true
})
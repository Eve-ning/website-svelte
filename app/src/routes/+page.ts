import {client} from '$lib/utils/sanity'
import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import groq from "groq";
import type {Post} from "./post/[slug]/+page";


async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        groq`*[_type == "blogPost" && defined(slug.current)] | order(_createdAt desc)`
    )
}


export const load = (async () => {
    const posts = await getPosts()

    if (posts) {
        return {
            posts
        }
    }

    throw error(404, 'Not found')
}) satisfies PageLoad

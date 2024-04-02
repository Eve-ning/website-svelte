import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {client} from '$lib/utils/sanity'
import groq from "groq";
import type {ImageAsset, Slug} from "@sanity/types";
import type {PortableTextBlock} from "@portabletext/types";

export const ssr = false


async function getPost(slug: string): Promise<Post> {
    return await client.fetch(groq`*[_type == "blogPost" && slug.current == $slug][0]`, {
        slug
    })
}


export interface Post {
    _type: 'blogPost';
    _createdAt: string;
    title?: string;
    slug: Slug;
    excerpt?: string;
    mainImage?: ImageAsset;
    body: PortableTextBlock[];
}


export const load = (async ({params}) => {
    const post = await getPost(params.slug)
    if (post) return post

    throw error(404, 'Not found')
}) satisfies PageLoad

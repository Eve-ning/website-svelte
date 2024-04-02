import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {client} from '$lib/utils/sanity'
import groq from "groq";
import type {PortableTextBlock} from "@portabletext/types";

export const ssr = false


async function getExpPosts(): Promise<ExpPost[]> {
    return await client.fetch(
        groq`*[_type == "expPost"] | order(dateTo desc)`
    )
}

export interface ExpPost {
    _type: 'expPost';
    _createdAt: string;
    title: string;
    dateFrom: string;
    dateTo: string;
    tags: { label: string, value: string }[];
    links: string[];
    summary: string;
    body: PortableTextBlock[];
}

export const load = (async ({params}) => {
    const posts = await getExpPosts()
    if (posts) return {posts}

    throw error(404, 'Not found')
}) satisfies PageLoad

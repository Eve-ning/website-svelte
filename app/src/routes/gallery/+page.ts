import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {client} from '$lib/utils/sanity'
import groq from "groq";
import type {ImageAsset} from "@sanity/types";

export const ssr = false

async function getGalleryImages(): Promise<GalleryImage[]> {
    return await client.fetch(
        groq`*[_type == "galleryImage"]{..., image{asset->{url}}}`
    )
}

export interface GalleryImage {
    _type: 'galleryImage';
    _createdAt: string;
    image: ImageAsset;
    name: string;
    desc: string;
}

export const load = (async ({params}) => {
    const ims = await getGalleryImages()
    if (ims) return {ims}

    throw error(404, 'Not found')
}) satisfies PageLoad

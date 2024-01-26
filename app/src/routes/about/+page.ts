import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getExpPosts } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const projectPosts = await getExpPosts('project');
	const skillPosts = await getExpPosts('skill');
	const careerPosts = await getExpPosts('career');

	if (projectPosts && skillPosts && careerPosts) {
		return {
			projectPosts,
			skillPosts,
			careerPosts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;

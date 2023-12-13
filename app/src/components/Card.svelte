<script lang="ts">
    import {formatDate} from '$lib/utils';
    import {urlFor} from '$lib/utils/image';
    import type {Post} from '$lib/utils/sanity';
    import {base} from '$app/paths';

    export let post: Post;
</script>

<div class="card">
    <div class="
    card transition duration-200
    border-accent border-l
    bg-base-100
    hover:bg-base-300
    ">
        <a class="card-body" href={`${base}/post/${post.slug.current}`}>
            <h2 class="card-title">{post.title}</h2>
            <p>{post.excerpt}</p>
            <div class="">{formatDate(post._createdAt)}</div>
        </a>
    </div>
</div>

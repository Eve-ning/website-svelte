<script lang="ts">
  import {formatDate} from '$lib/utils'
  import type {Post} from '$lib/utils/sanity'
  import {base} from '$app/paths'

  export let post: Post
  export let cardNumber: number = 0
</script>

<div class="flex">
  <div class="text-3xl mr-2 font-extrabold text-secondary">
    {cardNumber}.
  </div>

  <div class="card flex-1">
    <div class="card transition duration-200 hover:bg-base-300">
      <a class="card-body" href={`${base}/post/${post.slug.current}`}>
        <p class="card-title">{post.title}</p>
        <p>{post.excerpt}</p>
        <p>{formatDate(post._createdAt)}</p>
      </a>
    </div>
  </div>
</div>

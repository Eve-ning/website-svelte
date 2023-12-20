<script lang="ts">
  import {formatDate} from '$lib/utils'
  import type {PageData} from './$types'
  import {marked} from 'marked'

  export let data: PageData
</script>

<section class="post prose max-w-screen-sm mx-auto grid gap-2 py-20">
  <h1>{data.title}</h1>
  <h3>{data.excerpt}</h3>
  <p class="">{formatDate(data._createdAt)}</p>
  <div class="divider"></div>
  <div class="prose">{@html marked.parse(data.body)}</div>
</section>

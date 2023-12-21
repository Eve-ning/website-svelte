<script lang="ts">
  import {formatDate} from '$lib/utils'
  import type {PageData} from './$types'
  import {marked} from 'marked'
  import markedKatex from 'marked-katex-extension'
  import Hero from '../../../components/Hero.svelte'

  export let data: PageData
  marked.use(markedKatex({displayMode: true, output: 'mathml'}))
  const renderer = new marked.Renderer()

  renderer.code = function(text) {
    return `<div class="mockup-code"><pre><code>${text}</code></pre></div>`
  }

</script>

<Hero half="{true}" title="{data.title ?? '-'}">

  <div slot="post">
    <h3>{data.excerpt}</h3>
    <p>{formatDate(data._createdAt)}</p>
  </div>
</Hero>
<section class="prose grid gap-2 py-20 mx-auto">
  <div>{@html marked.parse(data.body, {renderer: renderer})}</div>
</section>

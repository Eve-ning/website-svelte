<script lang="ts">
  import {formatDate} from '$lib/utils'
  import type {PageData} from './$types'
  import {marked} from 'marked'
  import markedKatex from 'marked-katex-extension'
  import Hero from '../../../components/Hero.svelte'
  import mermaid from 'mermaid';

  mermaid.initialize({
    theme: 'dark',
    // themeVariables: {
    //   'background': "#000",
    //   'primaryColor': '#BB2528',
    //   'primaryTextColor': '#fff',
    //   'primaryBorderColor': '#7C0000',
    //   'lineColor': '#F8B229',
    //   'secondaryColor': '#006100',
    //   'tertiaryColor': '#fff'
    // }
  })
  export let data: PageData
  marked.use(markedKatex({displayMode: true, output: 'mathml'}))
  const renderer = new marked.Renderer();
  renderer.code = function (code, language) {
    if (code.match(/^sequenceDiagram/) || code.match(/^graph/)) {
      return '<pre class="mermaid bg-transparent grid justify-items-center">' + code + '</pre>';
    } else {
      return '<pre class="bg-transparent"><code>' + code + '</code></pre>';
    }
  };

</script>

<Hero title="{data.title ?? '-'}">
  <div slot="post">
    <h3>{data.excerpt}</h3>
    <p>{formatDate(data._createdAt)}</p>
  </div>
</Hero>
<section class="prose grid gap-2 py-20 mx-auto">
  <div>{@html marked.parse(data.body, {renderer: renderer})}</div>
</section>

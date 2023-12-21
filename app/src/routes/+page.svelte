<script lang="ts">
  import type {PageData} from './$types'
  import '../app.css'
  import Home from '../components/Home.svelte'
  import Hero from '../components/Hero.svelte'

  export let data: PageData
</script>

<section class="grid gap-4">
  <Hero title="Good Evening" half="{true}">
    <div slot="post">☄️</div>
  </Hero>
  <div class="max-w-screen-md mx-auto py-10">
  <Home posts="{data.posts}"/>
  </div>
</section>

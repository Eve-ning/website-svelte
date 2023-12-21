<script lang="ts">
  import Gallery from '../../components/Gallery.svelte'
  import Hero from '../../components/Hero.svelte'
  import '../../app.css'
</script>

<section>
  <div>
    <Hero title="Gallery">
      <ul class="list-none" slot="pre">
        <li>Images are all scaled to <span class="font-bold">1280 x 720</span></li>
        <li>Click on images for <span class="font-bold">fullscreen</span></li>
      </ul>
      <p class="py-6 text-lg" slot="post">⬇️ Scroll Down for images ⬇️</p>
    </Hero>
  </div>
  <div class="max-w-screen-2xl mx-auto m-10">
    <Gallery />
  </div>
</section>

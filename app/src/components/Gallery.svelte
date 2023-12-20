<script lang="ts">
  import {base} from '$app/paths'

  interface Image {
    path: string;
    title: string;
    desc?: string;
  }

  let imMeta: Image[] = [
    {path: 'bg/cat (1).jpg', title: 'My Cat, Mao Mao'},
    {path: 'bg/cat (2).jpg', title: 'My Cat, Mao Mao'},
    {path: 'bg/hafary (1).jpg', title: 'Singapore, Hafary Gallery'},
    {path: 'bg/hafary (2).jpg', title: 'Singapore, Hafary Gallery'},
    {path: 'bg/hafary (3).jpg', title: 'Singapore, Hafary Gallery'},
    {path: 'bg/hafary (4).jpg', title: 'Singapore, Hafary Gallery'},
    {path: 'bg/hafary (5).jpg', title: 'Singapore, Hafary Gallery'},
    {path: 'bg/kallang (1).jpg', title: 'Singapore, Near Kallang Wave', desc: 'Colour Corrected'},
    {path: 'bg/kallang (2).jpg', title: 'Singapore, Near Kallang Wave'},
    {path: 'bg/kallang (3).jpg', title: 'Singapore, Near Kallang Wave'},
    {path: 'bg/kallang (4).jpg', title: 'Singapore, Near Kallang Wave'},
    {path: 'bg/kallang (5).jpg', title: 'Singapore, Near Kallang Wave'},
    {path: 'bg/kurogane.jpg', title: 'Sailor\'s 110th Anniversary Pen, Kurogane'},
    {path: 'bg/ntu.jpg', title: 'Singapore, Changi Jewel'},
    {path: 'bg/star vista.jpg', title: 'Singapore, NTU'},
    {path: 'bg/wheelock.jpg', title: 'Singapore, The Star Vista'}
  ]
</script>

<div class="rounded-full border shadow p-3 m-3 text-center">
  <p>Click on any Image to expand it :)</p>
  <p>Images are scaled to 1280x720</p>
</div>
<div class="grid lg:grid-cols-4 md:grid-cols-1 gap-10">
  {#each imMeta as {path, title, desc}}
    <div class="card bg-base-100 shadow-xl">
      <figure><img
        src="{base}/{path}" alt="kurogane"
        class="filter contrast-75 hover:contrast-100 transition duration-300"
        onclick="this.requestFullscreen()"
      /></figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {#if desc} <p>{desc}</p> {/if}
      </div>
    </div>
  {/each}
</div>

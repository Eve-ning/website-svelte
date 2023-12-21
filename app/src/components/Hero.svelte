<script lang="ts">
  export let title: string
  export let half = false

  let size = half ? 'py-10' : 'min-h-screen'
</script>
<div class="hero {size} bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{title}</h1>
      <div class="py-6">
        <slot name="pre" />
      </div>
      <div class="divider"></div>
      <slot name="post" />
    </div>
  </div>
</div>

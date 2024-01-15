<script lang="ts">
  export let date: string
  export let title = ''
</script>

<li>
  <hr class="bg-primary" />
  <div class="timeline-start">
    <span class="badge badge-info italic">{date}</span>
    <span class="text-lg font-bold bad">{title}</span>
  </div>
  <div class="timeline-middle">
    <svg class="w-3 h-3"
         fill="currentColor"
         viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 18 a 8 8 0 1 0 0 -16 a 8 8 0 0 0 0 16 z z"
      />
    </svg>
  </div>
  <article class="timeline-end timeline-box prose">
    <slot />
  </article>
  <hr class="bg-primary" />
</li>
<script lang="ts">
  import Hero from '../../components/Hero.svelte'
  import '../../app.css'
  import TimelineItem from '../../components/TimelineItem.svelte'
  // import type {PageData} from './$types'

  // export let data: PageData

</script>

<section>
  <div>
    <Hero title="about">
      <ul class="list-none" slot="pre">
        <li class="font-mono">hello world</li>
      </ul>
      <!--      <p class="py-6 text-lg" slot="post">-->
      <!--        -->
      <!--      </p>-->
    </Hero>
  </div>
  <div class="max-w-screen-2xl mx-auto p-10 ">
    <div class="">
      <ul class="timeline timeline-vertical max-md:timeline-compact">
        <TimelineItem date="2015" title="My First Python Script">
          <p>I wr</p>
        </TimelineItem>
        <TimelineItem date="2017" title="My First Program in C++">
          <p>I wr</p>
        </TimelineItem>
        <TimelineItem date="2017" title="My First Program">
          <p></p>
        </TimelineItem>
        <TimelineItem date="2017" title="My First Program">
          <p></p>
        </TimelineItem>

      </ul>
    </div>
  </div>
</section>

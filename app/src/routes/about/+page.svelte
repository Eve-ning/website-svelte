<script lang="ts">
  import Hero from '../../components/Hero.svelte'
  import '../../app.css'
  import TimelineItem from '../../components/TimelineItem.svelte'
  import type {PageData} from './$types'
  import {marked} from 'marked'

  export let data: PageData

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
    <ul class="timeline timeline-vertical max-md:timeline-compact">
      {#each data.posts as {title, summary, links, dateFrom, dateTo, body}}

        <TimelineItem {title} {summary} {dateFrom} {dateTo}>
          {#if links}
            <ul>
              {#each links as url}
                <li><a href={url} class="font-mono underline text-xs">{url}</a></li>
              {/each}
            </ul>
          {/if}
          {#if body}
            <div>{@html marked(body)}</div>
          {/if}
        </TimelineItem>
      {/each}

      <!--      </TimelineItem>-->
      <!--      <TimelineItem date="2019" title="LaTeX for fancy documents">-->
      <!--        <p>-->
      <!--          Next, I created a small crash course LaTeX document on how to mathematically-->
      <!--          approach scroll speed modification in osu!mania.-->
      <!--          <a href="https://github.com/Eve-ning/SV-Crash-Course-LaTeX">SV Crash Course</a>-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          It's definitely not one for those who don't play-->
      <!--          <Tip hover="Vertical Scrolling Rhythm Games">VSRGs</Tip>-->
      <!--        </p>-->
      <!--      </TimelineItem>-->
      <!--      <TimelineItem date="2017" title="My First Program in C++">-->
      <!--        <p>-->
      <!--          I got into this Vertical Scrolling Rhythm Game (VSRG) called osu!mania.-->
      <!--          At its infancy, it didn't have tools that creators (known as mappers) could leverage.-->
      <!--          Aiming to clear this gap, and to try something challenging, I took up the challenge-->
      <!--          of coding in C++, one of the more complicated languages to learn.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          I created <a class="font-mono" href="https://github.com/Eve-ning/sv-tool">sv-tool</a>,-->
      <!--          a terminal tool that helps create scrolling speed modifiers in bulk.-->
      <!--        </p>-->
      <!--        <blockquote>-->
      <!--          This is also my first GitHub public repository!-->
      <!--        </blockquote>-->
      <!--      </TimelineItem>-->
      <!--      <TimelineItem date="2015" title="My First Python Script">-->
      <!--        <p>This is the first time I've experienced programming!</p>-->
      <!--        <p>-->
      <!--          It was way back in my Secondary School IT extra-curriculum.-->
      <!--          Tasked to create something cool with <b>Python</b>,-->
      <!--          I created a short Minecraft Visual Novel with RenPy and screenshots from the game.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          At that time, it didn't really spark my interest too much, but it was cool to create-->
      <!--          a "Cookie Clicker"-like game using a trivial infinite event while loop.-->
      <!--          It's rather easy to entertain a teenager with big numbers.-->
      <!--        </p>-->
      <!--      </TimelineItem>-->

    </ul>
  </div>
</section>

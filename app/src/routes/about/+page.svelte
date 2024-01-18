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
      {#each data.posts as {title, summary, links, date_from, date_to, body}}

        <TimelineItem date="2019 ~ 2023" title={title} summary={summary}>
          {#if links}
              {#each links as url}
                <a href={url} class="font-mono underline text-xs">{url}</a>
              {/each}
          {/if}
          {#if body}
            <div>{@html marked.parse(body)}</div>
          {/if}
        </TimelineItem>
      {/each}

      <!--      <TimelineItem date="2019" title="R Lang, for the lazy Pythonistas">-->
      <!--        <p>-->
      <!--          At that time, <b>R Lang</b> and <b>Python</b> were head to head,-->
      <!--          challenging each other to rule the world of Data Science.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          Both then, (and also now), are extremely accessible options for-->
      <!--          beginners, and prove to be great investments of time, as they-->
      <!--          are versatile languages for many data engineering use cases.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          My curious mind wanted to know what's the haps, thus created-->
      <!--          <a class="font-mono" href="https://github.com/Eve-ning/vsrgtools">vsrgtools</a>,-->
      <!--          a simple R Lang library that deals with I/O & data analytics for-->
      <!--          osu!mania maps. Also, I used RShiny to create a sample GUI in-->
      <!--          <a class="font-mono" href="https://github.com/Eve-ning/vsrgtools_ui">vsrgtools_ui</a>-->
      <!--          that was previously hosted on <b>Django</b>... <i>before the free tier was no more</i>-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          After giving it a try for a while, I can definitely see how accessible it is,-->
      <!--          however, the only edge it had over Python was the ease of plotting complicated-->
      <!--          graphs through the marvelous <span class="font-mono">ggplot2</span>.-->
      <!--          It's just not enough to keep me in R, especially when R consistently underperforms-->
      <!--          Python in performance for ML, larger datasets, and honestly, its editor support-->
      <!--          is subpar.-->
      <!--        </p>-->
      <!--      </TimelineItem>-->
      <!--      <TimelineItem date="2019" title="My first ML Research Paper try">-->
      <!--        <p>-->
      <!--          Following my passion for-->
      <!--          <Tip hover="Vertical Scrolling Rhythm Games">VSRGs</Tip>-->
      <!--          ,-->
      <!--          I wanted to get one foot into ML by solving one of the most complicated problems that my-->
      <!--          genre of games always had: Predicting Difficulty of a Level.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          I won't go too deep into why it's difficult, but in retrospect,-->
      <!--          it's a combination of-->
      <!--          <Tip hover="Machine Learning">ML</Tip>-->
      <!--          skillsets from-->
      <!--          <Tip hover="Natural Language Processing">NLP</Tip>-->
      <!--          ,-->
      <!--          <Tip hover="Computer Vision">CV</Tip>-->
      <!--          ,-->
      <!--          Collaborative Filtering, and, to bring it all together, Software Engineering.-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          You can take a look at the project-->
      <!--          <a class="font-mono" href="https://github.com/Eve-ning/ppshift_ml">ppshift_ml</a>-->
      <!--          and the-->
      <!--          <a href="https://github.com/Eve-ning/ppshift_ml/blob/master/research_tex/main.pdf">-->
      <!--            mini mock research paper on the subject-->
      <!--          </a>-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          It's no surprise that it's not the best approach,-->
      <!--          however, it gave me a good idea on what ML research can entail.-->
      <!--          This experience made me more confident in doing more.-->
      <!--        </p>-->

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

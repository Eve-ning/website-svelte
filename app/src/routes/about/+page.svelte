<script lang="ts">
	import Hero from '../../components/Hero.svelte';
	import '../../app.css';
	import TimelineItem from '../../components/TimelineItem.svelte';
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

</script>

<section>
	<div>
		<Hero title="about">
			<ul class="list-none" slot="pre">
				<li class="font-mono">hello world</li>
			</ul>
		</Hero>
	</div>
	<div class="max-w-screen-2xl mx-auto p-10 ">
		<div class="md:text-center font-extrabold text-5xl my-10 ">Projects</div>
		<ul class="timeline timeline-vertical max-md:timeline-compact">
			{#each data.posts as { title, summary, links, dateFrom, dateTo, tags, body }}
				<TimelineItem {title} {summary} {dateFrom} {dateTo} {tags}>
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

		</ul>
	</div>
</section>

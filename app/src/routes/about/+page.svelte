<script lang="ts">
	import Hero from '../../components/Hero.svelte';
	import '../../app.css';
	import TimelineItem from '../../components/TimelineItem.svelte';
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import Divider from '../../components/Divider.svelte';
	import Body from '../../components/Body.svelte';
	import TimelineList from '../../components/TimelineList.svelte';

	export let data: PageData;

</script>

<section>
	<div>
		<Hero title="about">
			<ul class="list-none" slot="post">
				<li class="font-mono">hello world</li>
			</ul>
		</Hero>
	</div>
	<Body>
		<TimelineList posts="{data.projectPosts}" title="Project History" />
	</Body>
</section>

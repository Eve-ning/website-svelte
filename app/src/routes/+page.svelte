<script lang="ts">
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;
</script>

<section class="max-w-md mx-auto grid gap-3 my-6">
	{#if data.posts.length}
		{#each data.posts as post, ix}
			<Card {post} />
			{#if ix === 0}
				<div class="divider divider-accent">LATEST</div>
			{/if}
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>

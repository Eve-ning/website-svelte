<script lang="ts">
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;
</script>

<section class="max-w-screen-sm mx-auto grid gap-4 py-20">
	{#if data.posts.length}
		{#each data.posts as post, ix}
			<Card {post} cardNumber={ix} />
			{#if ix === 0}
				<div class="divider divider-accent">LATEST</div>
			{/if}
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>

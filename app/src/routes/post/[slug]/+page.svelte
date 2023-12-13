<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="post prose max-w-md mx-auto grid gap-2 my-6">
    <h1 class="">{data.title}</h1>
    <h3 class="">{data.excerpt}</h3>
    <p >
        {formatDate(data._createdAt)}
    </p>
    <div>
        <PortableText value={data.body}/>
    </div>
</section>

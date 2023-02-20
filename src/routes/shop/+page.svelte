<script lang="ts">
	import type { Item } from '$lib/scripts/types';

	export let data: { items: Item[] };
</script>

<section>
	{#if data && data.items && data.items.length !== 0}
		{#each data.items as item}
			<div class="item">
				<h2>{item.name}</h2>
				<p>{item.description}</p>
			</div>
		{/each}
	{/if}

</section>

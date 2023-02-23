<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ItemCard from '../../ItemCard.svelte';

	export let data: { items: Item[] };
</script>

<div class="flex flex-col gap-8 p-4">
	<h1 class="text-6xl text-center">Trail Shoes</h1>
	<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
		{#if data?.items && data.items.length > 0}
			{#each data.items as item}
				<ItemCard {item} />
			{/each}
		{/if}
	</div>
</div>

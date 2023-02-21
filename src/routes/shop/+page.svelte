<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ItemCard from './ItemCard.svelte';
	import ShopCards from './ShopCards.svelte';

	export let data: { items: Item[] };
</script>

<section class="flex flex-col">
	<!-- create a section to shop shoes gear or clothes -->
	<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 ">
		<ShopCards type="shoes" />
		<ShopCards type="gear" />
		<ShopCards type="clothes" />
		
	</div>
	<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
		{#if data && data.items && data.items.length !== 0}
			{#each data.items.filter((item) => item.type === "shoes") as item}
				<ItemCard {item} />
			{/each}
		{/if}
	</div>
</section>

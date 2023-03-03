<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ItemList from './ItemList.svelte';
	import ShopCards from './ShopCards.svelte';

import ClothesCard from '$lib/images/cards/clothes.png';
import GearCard from '$lib/images/cards/gear.webp';
import ShoesCard from '$lib/images/cards/shoe.webp';

	export let data: { items: Item[] };
</script>

<div class="flex flex-col gap-8 p-4">
	<h1 class="text-6xl text-center">Shop</h1>
	<div class="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
		<ShopCards
			type="shoes"
			image={ShoesCard}
		/>
		<ShopCards
			type="gear"
			image={GearCard}
		/>
		<ShopCards
			type="clothes"
			image={ClothesCard}
		/>
	</div>

	<ItemList {data} type="shoes" oneRow />
	<ItemList {data} type="gear" oneRow />
	<ItemList {data} type="clothes" oneRow />
</div>

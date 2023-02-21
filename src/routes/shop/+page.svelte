<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ItemCard from './ItemCard.svelte';
	import ItemList from './ItemList.svelte';
	import ShopCards from './ShopCards.svelte';

	export let data: { items: Item[] };
</script>

<div class="flex flex-col gap-8 p-4">
	<h1 class="text-6xl text-center">Shop</h1>
	<div class="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 ">
		<ShopCards
			type="shoes"
			image="https://ccwh54no.cdn.imgeng.in/media/catalog/product/cache/f9298953e225fe5aa69348b5b4218d7e/1/0/1013A116_400_SR_RT_GLB_PNG_1280x1280_PNG_png.png"
		/>
		<ShopCards
			type="gear"
			image="https://media.wired.co.uk/photos/606d9c06307b8f0b37c724f4/master/w_1600%2Cc_limit/wired-uk-hero-gps-watches-3.jpg"
		/>
		<ShopCards
			type="clothes"
			image="https://tracksmith-media.imgix.net/Summer22-Mens-OTQ_Singlet_with_Woven_Label.png?bg=f8f8f8&fit=fillmax&w=1080&h=1080"
		/>
	</div>
	
	<ItemList data={data} type="shoes" />
	<ItemList data={data} type="gear" />
	<ItemList data={data} type="clothes" />
</div>

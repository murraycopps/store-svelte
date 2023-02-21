<script lang="ts">
	import type { Item } from '$lib/scripts/types';

	export let item: Item;
</script>

<a
	href={`/shop/${item.type}/${item.type === 'shoes' && item.shoeType ? item.shoeType + '/' : ''}${
		item.url
	}`}
>
	<h2>{item.name}</h2>
	{#if item.image}
		<img src={item.image} alt={item.name} class="cover " />
	{/if}
	<p>${item.price}</p>
	<p>{item.type}</p>
	{#if item.type === 'shoes' && item.shoeType}
		<p>{item.shoeType}</p>
	{/if}
</a>

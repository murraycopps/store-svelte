<script lang="ts">
	import type { Item } from '$lib/scripts/types';

	export let item: Item;

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const sizes: {
		[key: string]: string;
	} = {
		shoes: 'h-36',
		clothes: 'h-64',
		gear: 'h-96'
	};
</script>

<a
	href={`/shop/${item.type}/${item.type === 'shoes' && item.shoeType ? item.shoeType + '/' : ''}${
		item.url
	}`}
	class="relative flex flex-col items-center justify-between w-full h-full gap-4 p-4 text-white bg-purple-800 rounded-3xl"
>
	{#if item.image}
		<img
			src={item.image}
			alt={item.name}
			class={`object-cover rounded-3xl w-full aspect-square ${sizes[item.type]}`}
		/>
	{/if}
	<div class="w-full text-center">
		<h2 class="text-lg">{item.name}</h2>
		<div class="grid w-full grid-cols-3">
			<p>${item.price}</p>
			<p>{capitalize(item.type)}</p>
			<p>{item.rating}/5</p>
		</div>
	</div>
</a>

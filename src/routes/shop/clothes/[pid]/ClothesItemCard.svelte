<script lang="ts">
	import type { Item } from '$lib/scripts/types';

	export let item: Item;

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
</script>

<div class="grid grid-cols-2 p-4 bg-purple-800 width-clamp rounded-4xl">
	<img src={item.image} alt={item.name} class={`object-fit rounded-3xl w-full`} />
	<div class="flex flex-col justify-between w-full h-full gap-4 p-4 text-white">
		<div class="flex flex-col w-full gap-8 text-center">
			<h2 class="text-4xl">{item.name}</h2>
			<div class="grid w-full grid-cols-3 px-4 text-2xl">
				<p>${item.price}</p>
				<p>{capitalize(item.type)}</p>
				<p>{item.rating}/5</p>
			</div>
			<p class="px-4 text-2xl">
				{item.description}
			</p>
		</div>
	</div>
</div>

<style>
	.width-clamp {
		width: clamp(500px, 75vw, 1000px);
		max-width: 100%;
	}
</style>

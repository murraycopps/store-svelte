<script lang="ts">
	import cart from '$lib/scripts/cart';
	import type { Item } from '$lib/scripts/types';
	import { goto } from '$app/navigation';

	export let item: Item;

	let quantity = 1;

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
</script>

<div class={`grid grid-cols-2 p-4 ${item.quantity > 0 ? "bg-purple-800" : "bg-red-500"} width-clamp rounded-4xl`}>
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
			{#if item.quantity > 0}
				<div class="flex flex-col w-full gap-4">
					<div class="flex flex-row items-center w-full gap-4 justify-evenly">
						<label for="quantity" class="text-2xl">Quantity</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							min="1"
							max={item.quantity - cart.getQuantity(item.name)}
							bind:value={quantity}
							class="w-1/2 px-4 py-2 text-2xl text-black border-2 border-purple-800 rounded-3xl"
						/>
					</div>
					<button
						class="w-full px-4 py-2 text-2xl bg-purple-600 rounded-3xl"
						on:click={() => {
							cart.addItem(item, quantity);
							goto('/shop/cart');
						}}>Add to Cart</button
					>
				</div>
			{:else}
				<p class="text-2xl">Out of Stock</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.width-clamp {
		width: clamp(500px, 75vw, 1000px);
		max-width: 100%;
	}
</style>

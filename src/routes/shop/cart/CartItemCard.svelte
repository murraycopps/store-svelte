<script lang="ts">
	import cart from '$lib/scripts/cart';
	import type { CartItem } from '$lib/scripts/types';

	export let item: CartItem;
	export let update: () => void;

	const sizes: {
		[key: string]: string;
	} = {
		shoes: 'h-36',
		clothes: 'h-48',
		gear: 'h-48'
	};
</script>

<div
	class="relative flex flex-row items-center justify-between w-full gap-4 p-4 text-white bg-purple-800 h-fit-content rounded-3xl cart-item-card"
>
	{#if item.image}
		<img
			src={item.image}
			alt={item.name}
			class={`object-cover w-full rounded-3xl ${sizes[item.type]} ${item.type}}`}
		/>
	{/if}
	<div class="flex flex-col w-full h-full gap-4 text-center justify-evenly">
		<h2 class="text-2xl">{item.name}</h2>
		<div class="grid w-full grid-cols-3">
			<p class="text-xl">${item.price}</p>
			<p class="text-xl">{item.rating}/5</p>
			<div class="grid w-full grid-cols-3">
				<button
					class="w-full h-full"
					on:click={() => {
						cart.decreaseQuantity(item.name);
						update();
					}}
				>
					<svg
						class="w-full h-full"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 10L12 15L17 10"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<p class="text-xl">{item.cartQuantity}</p>
				<button
					class="w-full h-full"
					on:click={() => {
						cart.increaseQuantity(item.name);
						update();
					}}
				>
					<svg
						class="w-full h-full rotate-180"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 10L12 15L17 10"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
		<button
			on:click={() => {
				cart.removeItem(item.name);
				update();
			}}
			class="top-0 right-0 p-2 text-white bg-red-500 rounded-full">Remove</button
		>
	</div>
</div>

<style>
	.shoes {
		aspect-ratio: 2;
	}
	.clothes {
		aspect-ratio: 4 / 5;
	}
	.gear {
		aspect-ratio: 3 / 4;
	}
	.cart-item-card {
		width: clamp(400px, 50vw, 600px);
	}
</style>

<script lang="ts">
	import cart from '$lib/scripts/cart';
	import CartItemCard from './CartItemCard.svelte';

	let cartItems = cart.getItems();

	const update = () => {
		cartItems = cart.getItems();
	};
</script>

<div class="flex items-center justify-center w-full h-screen">
	<div class="flex flex-col items-center justify-center w-full h-full p-4">
		<h1 class="text-6xl">Cart</h1>
		<div class="flex flex-col items-center justify-start w-full h-full gap-4 p-4">
			{#if cartItems?.length}
				{#each cartItems as item}
					<CartItemCard {item} {update} />
				{/each}
				<div class="grid grid-cols-2 place-items-center w-1/2 p-4 bg-gray-100 rounded-lg gap-4 min-w-fit">
					<h2 class="text-xl font-bold">Total:</h2>
					<h2 class="text-xl font-bold">
						${(
							1.06 * cartItems.reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
						).toFixed(2)}
					</h2>
				</div>
				<div
					class="grid grid-cols-1 gap-4 text-center bg-gray-100 rounded-lg lg:grid-cols-2 button-container-width"
				>
					<a
						href="/shop/checkout"
						class="px-12 py-4 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
						>Checkout</a
					>
					<a
						href="/shop"
						class="px-12 py-4 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
						>Go to shop</a
					>
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center w-full h-full gap-8">
					<h1 class="text-4xl font-bold">Cart is empty</h1>
					<a
						href="/shop"
						class="px-8 py-4 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
						>Go to shop</a
					>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.button-container-width {
		width: clamp(400px, 50vw, 600px);
	}
</style>

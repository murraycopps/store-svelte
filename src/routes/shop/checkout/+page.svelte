<script lang="ts">
	import { goto } from '$app/navigation';
	import cart from '$lib/scripts/cart';

	const price = cart.getTotalPrice();

	if (!price) {
		goto('/shop');
	}
	let loading = false;

	const checkout = async () => {
		loading = true;
		try {
			const res = await fetch(`https://store-server-murraycopps.vercel.app/checkout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					items: cart.getItems()
				})
			});

			const data = await res.json();

			cart.clearCart();

			goto(`/shop/checkout/${data.success ? 'success' : 'failure'}`);
		} catch (err) {
			console.log(err);
			goto('/shop/checkout/failure');
		}
	};
</script>

<section class="flex flex-col items-center w-full h-screen p-4 justify-evenly">
	{#if loading}
		<h1 class="text-6xl">Loading...</h1>
	{:else}
		<h1 class="text-6xl">Checkout</h1>
		<h2 class="text-3xl font-bold">Total: ${price}</h2>
		<button
			on:click={checkout}
			class="px-12 py-4 text-2xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
			>Checkout</button
		>
	{/if}
</section>

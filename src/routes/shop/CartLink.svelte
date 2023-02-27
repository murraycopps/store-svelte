<script lang="ts">
	import CartImage from '$lib/images/cart.svg';
</script>

<a href="/shop/cart" class="fixed top-2 right-2">
	<img src={CartImage} alt="cart" class="w-12 h-12" />
</a>

<style>
	a {
		transition: transform 0.3s ease-in-out;
	}

	a:hover {
		transform: scale(1.1);
	}

	img {
		filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
	}
</style>

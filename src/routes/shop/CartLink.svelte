<script lang="ts">
	import CartImage from '$lib/images/cart.svg';
</script>

<a href="/shop/cart" class="fixed rounded-lg top-4 right-4">
	<img src={CartImage} alt="cart" class="w-10 h-10" />
</a>

<style>
	a {
		background: rgba(227, 241, 241, 0.6);
		transition: transform 0.3s ease-in-out;
	}

	a:hover {
		transform: scale(1.1);
	}
</style>

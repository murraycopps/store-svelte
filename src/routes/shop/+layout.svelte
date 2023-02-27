<script>
	import CartLink from './CartLink.svelte';
	import NavBar from './NavBar.svelte';
</script>

<header class="fixed top-0 left-0 z-50 p-4">
	<NavBar />
	<CartLink />
</header>

<main>
	<slot />
</main>

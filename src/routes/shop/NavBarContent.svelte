<script lang="ts">
	import NavBarShoeDropdown from './NavBarShoeDropdown.svelte';
	import { clickOutside } from '$lib/scripts/clickOutside';

	export let open: boolean;
	export let close: () => void;
	let dropdownOpen = false;
	let toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};
	let closeBoth = () => {
		dropdownOpen = false;
		close();
	};
</script>

<div
	class={`fixed top-0 bottom-0 left-0 text-white text-xl text-center bg-gray-500 overflow-hidden ${
		open ? 'w-full sm:w-1/2 lg:w-1/3' : 'w-0'
	}`}
	id="nav-bar"
	use:clickOutside={{ ignore: 'nav-button' }}
	on:click_outside={closeBoth}
>
	<nav class="flex flex-col items-center w-full h-full gap-4 p-4">
		<a href="/shop" on:click={close}>Shop All</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<NavBarShoeDropdown close={closeBoth} open={dropdownOpen} {toggleDropdown} />
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/clothes" on:click={close}>Clothes</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/gear" on:click={close}>Gear</a>
	</nav>
</div>

<style>
	div {
		transition: width 0.3s ease-in-out;
	}
</style>

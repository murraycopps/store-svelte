<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import NavBarShoeDropdown from './NavBarShoeDropdown.svelte';
	import { clickOutside } from '$lib/scripts/clickOutside';

	export let open: boolean;
    export let close: () => void;
</script>

<div
	class={`fixed top-0 bottom-0 left-0 text-white text-xl text-center bg-gray-500 overflow-hidden ${
		open ? 'w-1/3' : 'w-0'
	}`}
    id="nav-bar"
	use:clickOutside={{ignore: 'nav-button'}} on:click_outside={close}
    
>
	<nav class="flex flex-col items-center w-full h-full gap-4 p-4">
		<a href="/shop/clothes" class="w-1/2">Clothes</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/gear">Gear</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<NavBarShoeDropdown />
	</nav>
</div>

<style>
	div {
		transition: width 0.3s ease-in-out;
	}
</style>

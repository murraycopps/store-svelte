<script lang="ts">
	import NavBarContent from './NavBarContent.svelte';

	let open = false;

    const close = () => {
		console.log('closing');
        open = false;
    }
    
</script>

<!-- 
<button
    class="fixed top-0 left-0 p-4"
    on:blur={close}
> -->
<button
	class={`flex flex-col justify-between w-8 h-8 py-1 z-50 ${open && 'open'}`}
	id="nav-button"
	on:click={() => {
		console.log('click');
		open = !open;
	}}
>
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
    
</button>
<NavBarContent {open} {close} />

<!-- </button> -->
<style>
	span {
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
			background-color 0.3s ease-in-out;
	}

	.open {
		background-color: white;
	}

	.open > span:nth-child(1) {
		transform: translateY(0.6rem) rotate(45deg);
	}

	.open > span:nth-child(2) {
		opacity: 0;
	}

	.open > span:nth-child(3) {
		transform: translateY(-0.6rem) rotate(-45deg);
	}
</style>

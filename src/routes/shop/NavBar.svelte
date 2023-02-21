<script lang="ts">
	import NavBarContent from "./NavBarContent.svelte";

	let open = false;
</script>

<button
	class={`flex flex-col justify-between w-8 h-6 ${open && 'open'}`}
	on:click={() => (open = !open)}
    on:blur={() => (open = false)}
>
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
	<span class="z-50 w-full h-1 bg-gray-800 rounded-full" class:open />
    <NavBarContent {open}/>
</button>

<style>
	span {
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
	}

    .open{
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

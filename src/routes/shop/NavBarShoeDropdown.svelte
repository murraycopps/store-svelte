<script lang="ts">
	export let open: boolean;
	export let close: () => void;
	export let toggleDropdown: () => void;
</script>

<div class="relative flex flex-col items-center w-full" class:open>
	<button class="relative w-3/4" on:click={toggleDropdown}>
		Shoes
		<span class="absolute right-0 h-full transform -translate-y-1/2 top-1/2 aspect-square">
			<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 10L12 15L17 10"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>
	</button>
	<div class="absolute z-50 flex-col items-center hidden w-full gap-2 px-4 bg-gray-500 top-full">
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes" on:click={close}>Shop All Shoes</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/trail" on:click={close}>Trail</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/road" on:click={close}>Road</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/spikes" on:click={close}>Spikes</a>
		<span class="mx-auto border-b border-white wider" />
	</div>
</div>

<style>
	.open{
		padding-bottom: 1rem;
	}
	.open > div {
		display: flex;
	}

	.open > button > span > svg {
		transform: rotate(180deg);
	}
	svg {
		transition: transform 0.3s ease-in-out;
	}
	.wider {
		width: calc(3 / 4 * (100% + 2rem))
	}
</style>

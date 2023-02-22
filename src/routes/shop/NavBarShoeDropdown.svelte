<script lang="ts">
	let open = false;
	export let close: () => void;
</script>

<div class="relative w-full flex flex-col items-center" class:open>
	<button class="relative w-3/4" on:click={() => (open = !open)}>
		Shoes
		<span class="absolute right-0 top-1/2 aspect-square h-full transform -translate-y-1/2">
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
	<div class="hidden w-full flex-col items-center px-4 gap-2 absolute top-full z-50 bg-gray-500">
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes" on:click={close}>Shop All Shoes</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/trail" on:click={close}>Trail</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/road" on:click={close}>Road</a>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes/spikes" on:click={close}>Spikes</a>
		<span class="wider mx-auto border-b border-white" />
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

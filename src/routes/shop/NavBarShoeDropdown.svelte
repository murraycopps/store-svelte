<script>
	let open = false;
</script>

<div>
	<button class="relative" on:click={() => (open = !open)}> Shoes </button>
	<div class="hidden w-full" class:open>
		<span class="w-3/4 mx-auto border-b border-white" />
		<a href="/shop/shoes">All</a>
		<a href="/shop/shoes/trail">Trail</a>
		<a href="/shop/shoes/road">Road</a>
		<a href="/shop/shoes/spikes">Spikes</a>
	</div>
</div>

<style>
	.open {
		display: block;
	}
</style>

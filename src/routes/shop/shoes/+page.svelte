<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ShoeList from './ShoeList.svelte';
	import ShoeType from './ShoeType.svelte';

	import TrailShoe from '$lib/images/cards/trail-shoe.jpeg';
	import RoadShoe from '$lib/images/cards/road-shoe.jpeg';
	import Spikes from '$lib/images/cards/spikes.jpeg';

	export let data: { items: Item[] };
</script>

<div class="flex flex-col gap-8 p-4">
	<h1 class="text-6xl text-center">Shoes</h1>
	<div class="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
		<ShoeType
			type="trail"
			image={TrailShoe}
		/>
		<ShoeType type="road" image={RoadShoe} />
		<ShoeType
			type="spikes"
			image={Spikes}
		/>
	</div>
	<div class="flex flex-col gap-8">
		<ShoeList {data} type="trail" oneRow />
		<ShoeList {data} type="road" oneRow />
		<ShoeList {data} type="spikes" oneRow />
	</div>
</div>

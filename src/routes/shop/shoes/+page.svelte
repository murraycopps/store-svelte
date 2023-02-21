<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ShoeList from './ShoeList.svelte';

	export let data: { items: Item[] };
</script>

<h1
	class="text-6xl text-center"
>
	Shoes
</h1>

<ShoeList {data} type="trail" oneRow />
<ShoeList {data} type="road" oneRow />
<ShoeList {data} type="spikes" oneRow />

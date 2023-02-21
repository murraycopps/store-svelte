<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import ShoeList from './ShoeList.svelte';
	import ShoeType from './ShoeType.svelte';

	export let data: { items: Item[] };
</script>

<h1 class="text-6xl text-center">Shoes</h1>
<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <ShoeType type="trail" image="https://www.tradeinn.com/f/13858/138584722/altra-mont-blanc-trail-running-shoes.jpg"/>
    <ShoeType type="road" image="https://wp.fittedcdn.com/assets/1119394-BFPA.1.jpeg"/>
    <ShoeType type="spikes" image="https://3610efad3cf0672f75ac-af31fb52ce4291c72fea245835348588.ssl.cf1.rackcdn.com/835997-017.jpg"/>
</div>
<div class="flex flex-col gap-8">
	<ShoeList {data} type="trail" oneRow />
	<ShoeList {data} type="road" oneRow />
	<ShoeList {data} type="spikes" oneRow />
</div>

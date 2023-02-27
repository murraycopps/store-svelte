<script lang="ts">
	import type { Item } from '$lib/scripts/types';
	import SingleItemCard from '../../SingleItemCard.svelte';
	export let data: { item: Item };
	let { item } = data;
</script>

<div class="flex items-start justify-center w-full h-screen p-4 bg-gray-100 lg:items-center">
	<SingleItemCard {item} />
</div>

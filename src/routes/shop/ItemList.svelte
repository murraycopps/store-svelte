<script lang="ts">
	import ItemCard from './ItemCard.svelte';

	import type { Item } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	export let data: { items: Item[] };
	export let type: string;
	export let oneRow: boolean = false;

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	let items: Item[] = [];

	onMount(() => {
		if (!data || !data.items) return;

		items = data.items
			.filter((item) => item.type === type)
			.sort((a, b) => {
				if (a.quantity === 0 && b.quantity === 0) {
					return a.rating > b.rating ? -1 : 1;
				} else if (a.quantity === 0) {
					return 1;
				} else if (b.quantity === 0) {
					return -1;
				} else {
					return a.rating > b.rating ? -1 : 1;
				}
			});

		if (items.length > 4 && oneRow) items = items.slice(0, 4);
	});
</script>

<div class="p-8 text-4xl text-white bg-blue-600 section-label">
	<h2>{capitalize(type)}</h2>
</div>
<section class="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
	{#if items && items.length !== 0}
		{#each items as item}
			<ItemCard {item} />
		{/each}
	{/if}
</section>

<style lang="postcss">
	.section-label {
		--slant-amount: 5rem;
		clip-path: polygon(
			var(--slant-amount) 0%,
			100% 0%,
			calc(100% - var(--slant-amount)) 100%,
			0% 100%
		);
		padding-left: calc(var(--slant-amount) + 1rem);
	}
</style>

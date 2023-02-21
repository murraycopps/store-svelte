<script lang="ts">
	import ItemCard from './ItemCard.svelte';

    import type { Item } from '$lib/scripts/types';

    export let data: { items: Item[] };
    export let type: string;

    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
</script>

<div class="p-8 text-4xl text-white bg-blue-600 section-label">
    <h2>{capitalize(type)}</h2>
</div>
<section class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {#if data && data.items && data.items.length !== 0}
        {#each data.items.filter((item) => item.type === type) as item}
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
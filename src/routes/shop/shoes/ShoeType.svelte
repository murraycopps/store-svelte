<script lang="ts">
	export let type: string;
	export let image: string;

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<a href={`/shop/shoes/${type}`} class="relative h-full">
	<img src={image} alt={type} class="object-cover bg-green-200 rounded-3xl aspect-square" />
	<div
		class="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-white"
	>
		<h2 class="text-5xl">{capitalize(type)}</h2>
		<p class="text-2xl">Shop our selection of {type}</p>
	</div>
</a>

<style>
	img {
		filter: blur(0.4rem) brightness(0.65);
	}

	a:hover > img,
	a:focus > img {
		filter: blur(0.3rem) brightness(0.75) saturate(1.5);
	}
</style>

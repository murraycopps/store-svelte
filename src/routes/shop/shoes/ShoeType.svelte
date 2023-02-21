<script lang="ts">
	export let shoeType: string;
	export let image: string;

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<a href={`/shop/shoes/${shoeType}`} class="relative h-full">
	<img src={image} alt={shoeType} class="object-cover bg-green-200 rounded-3xl aspect-square" />
	<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-white z-100">
		<h2 class="text-5xl">{capitalize(shoeType)}</h2>
		<p class="text-2xl">Shop our selection of {shoeType}</p>
	</div>
</a>

<style>
    img{
        filter: blur(.4rem) brightness(0.65);
    }
</style>

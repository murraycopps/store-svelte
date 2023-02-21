<script lang="ts">
	export let type: string;

	const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<a href={`/shop/${type}`}>
	<h2>{capitalize(type)}</h2>
	<p>Shop our selection of {type}</p>
</a>

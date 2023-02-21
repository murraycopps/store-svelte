<script lang="ts">
    
    export let open: boolean;
</script>
<nav class={`fixed top-0 bottom-0 left-0 flex flex-col text-white py-4 text-xl gap-4 bg-gray-400 overflow-hidden ${open ? 'w-1/3' : "w-0"}`}>
    <a href="/shop/clothes">Clothes</a>
    <a href="/shop/gear">Gear</a>
</nav>

<style>
    nav{
        transition: width 0.3s ease-in-out;
    }
</style>

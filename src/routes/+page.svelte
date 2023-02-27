<script lang="ts">
	import LandingImage from '$lib/images/landing.jpg';
	import Button3D from './Button3D.svelte';
</script>

<section
	class="fixed z-0 flex flex-col items-center justify-center w-screen h-screen gap-12 text-center text-white"
>
	<img src={LandingImage} alt="" class="fixed w-screen h-screen cover opacity-20" />
	<h1 class="z-10 py-2 text-6xl text-white sm:text-8xl md:text-9xl">Running Store</h1>
	<p class="z-10 text-2xl">Shop our selection of running shoes, clothes, and gear</p>
	<Button3D />
</section>

<style lang="postcss">
	img {
		filter: blur(10px) brightness(0.5);
	}
	section {
		background: radial-gradient(rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 1) 100%);
	}
	/* h1 {
		color: transparent;
		background: linear-gradient(
			90deg,
			#ff00ff,
			#ff0000,
			#ffff00,
			#00ff00,
			#00ffff,
			#0000ff,
			#ff00ff
		);
		background-size: 600%;
		animation: animate 10s linear infinite;
		-webkit-background-clip: text;
	}
	@keyframes animate {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 600%;
		}
	} */
</style>

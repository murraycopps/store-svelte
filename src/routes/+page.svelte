<script lang="ts">
	import LandingImage from '$lib/images/landing.jpg';
</script>

<section
	class="fixed z-0 flex flex-col items-center justify-center w-screen h-screen gap-12 text-white"
>
	<img src={LandingImage} alt="" class="fixed w-screen h-screen cover opacity-20" />
	<h1 class="z-10 py-2 text-9xl">Running Store</h1>
	<a href="/shop" class="grid grid-cols-4 grid-rows-4 link-container">
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div class="z-10 text-2xl link">Shop</div>
	</a>
</section>

<style lang="postcss">
	img {
		filter: blur(10px) brightness(0.5);		
	}
	section {
		background: radial-gradient(rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 1) 100%);
	}
	h1 {
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
	}
	.link {
		--rotate-x: 0deg;
		--rotate-y: 0deg;
		background: rgb(34, 193, 195);
		background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
		border-radius: 1rem;
		padding: 1rem 8rem;
		color: #fff;
		text-shadow: 0 0 0.5rem #000;
		perspective: 1000px;
		transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
		transform-style: preserve-3d;
		position: relative;
		transition: all 0.5s ease;
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
	.link::after {
		content: '';
		position: absolute;
		inset: -0.5rem -1rem;
		border-radius: 1rem;
		background: rgb(19, 179, 150);
		transform: translateZ(-50px);
	}
	.link::before {
		content: '';
		position: absolute;
		inset: 0.5rem;
		filter: blur(0.5rem);
		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.5);
		transform: translateZ(-49px);
	}
	.link-container > div:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		z-index: 100;
	}
	.link-container > div:nth-child(1):hover ~ div {
		--rotate-x: 15deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	.link-container > div:nth-child(2):hover ~ div {
		--rotate-x: 15deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(3) {
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		z-index: 100;
	}
	.link-container > div:nth-child(3):hover ~ div {
		--rotate-x: 15deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(4) {
		grid-column: 4 / 5;
		grid-row: 1 / 2;
		z-index: 100;
	}
	.link-container > div:nth-child(4):hover ~ div {
		--rotate-x: 15deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(5) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(5):hover ~ div {
		--rotate-x: 5deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(6) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(6):hover ~ div {
		--rotate-x: 5deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(7) {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(7):hover ~ div {
		--rotate-x: 5deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(8) {
		grid-column: 4 / 5;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(8):hover ~ div {
		--rotate-x: 5deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(9) {
		grid-column: 1 / 2;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(9):hover ~ div {
		--rotate-x: -5deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(10) {
		grid-column: 2 / 3;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(10):hover ~ div {
		--rotate-x: -5deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(11) {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(11):hover ~ div {
		--rotate-x: -5deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(12) {
		grid-column: 4 / 5;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(12):hover ~ div {
		--rotate-x: -5deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(13) {
		grid-column: 1 / 2;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(13):hover ~ div {
		--rotate-x: -15deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(14) {
		grid-column: 2 / 3;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(14):hover ~ div {
		--rotate-x: -15deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(15) {
		grid-column: 3 / 4;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(15):hover ~ div {
		--rotate-x: -15deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(16) {
		grid-column: 4 / 5;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(16):hover ~ div {
		--rotate-x: -15deg;
		--rotate-y: 15deg;
	}

</style>

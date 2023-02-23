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
    <p class="z-10 text-2xl link">Shop</p>
</a>

<style>
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
	.link-container > div:nth-child(1):hover ~ p {
		--rotate-x: 15deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(2) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	.link-container > div:nth-child(2):hover ~ p {
		--rotate-x: 15deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(3) {
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		z-index: 100;
	}
	.link-container > div:nth-child(3):hover ~ p {
		--rotate-x: 15deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(4) {
		grid-column: 4 / 5;
		grid-row: 1 / 2;
		z-index: 100;
	}
	.link-container > div:nth-child(4):hover ~ p {
		--rotate-x: 15deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(5) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(5):hover ~ p {
		--rotate-x: 5deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(6) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(6):hover ~ p {
		--rotate-x: 5deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(7) {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(7):hover ~ p {
		--rotate-x: 5deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(8) {
		grid-column: 4 / 5;
		grid-row: 2 / 3;
		z-index: 100;
	}
	.link-container > div:nth-child(8):hover ~ p {
		--rotate-x: 5deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(9) {
		grid-column: 1 / 2;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(9):hover ~ p {
		--rotate-x: -5deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(10) {
		grid-column: 2 / 3;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(10):hover ~ p {
		--rotate-x: -5deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(11) {
		grid-column: 3 / 4;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(11):hover ~ p {
		--rotate-x: -5deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(12) {
		grid-column: 4 / 5;
		grid-row: 3 / 4;
		z-index: 100;
	}
	.link-container > div:nth-child(12):hover ~ p {
		--rotate-x: -5deg;
		--rotate-y: 15deg;
	}
	.link-container > div:nth-child(13) {
		grid-column: 1 / 2;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(13):hover ~ p {
		--rotate-x: -15deg;
		--rotate-y: -15deg;
	}
	.link-container > div:nth-child(14) {
		grid-column: 2 / 3;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(14):hover ~ p {
		--rotate-x: -15deg;
		--rotate-y: -5deg;
	}
	.link-container > div:nth-child(15) {
		grid-column: 3 / 4;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(15):hover ~ p {
		--rotate-x: -15deg;
		--rotate-y: 5deg;
	}
	.link-container > div:nth-child(16) {
		grid-column: 4 / 5;
		grid-row: 4 / 5;
		z-index: 100;
	}
	.link-container > div:nth-child(16):hover ~ p {
		--rotate-x: -15deg;
		--rotate-y: 15deg;
	}
</style>


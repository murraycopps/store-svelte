// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface HTMLAttributes {
			'on:click_outside'?: (event: MouseEvent) => void;
		}
	}
}

export {};

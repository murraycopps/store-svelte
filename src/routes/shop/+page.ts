import type { Item } from '$lib/scripts/types';

export const load = async ({ fetch }: any) => {
	const res = await fetch(`https://store-server-murraycopps.vercel.app/`);
	const data = (await res.json()) as Item;
	return {
		items: data
	};
};

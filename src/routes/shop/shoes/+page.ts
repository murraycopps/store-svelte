import type { Item } from '$lib/scripts/types';

export const load = async ({ fetch }: any) => {
	const res = await fetch(`https://store-server-murraycopps.vercel.app/`);
	const data = await res.json();
	data.filter((item: Item) => item.type === 'shoes');
	return {
		items: data
	};
};

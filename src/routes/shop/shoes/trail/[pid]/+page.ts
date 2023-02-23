import type { Item } from '$lib/scripts/types';

export const load = async ({params, fetch }: any) => {
    const res = await fetch(`https://store-server-murraycopps.vercel.app/`);
    const data = await res.json();
    return {
        item: data.find((item: Item) => item.url === params.pid)
    }

}
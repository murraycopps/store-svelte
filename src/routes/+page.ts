import { error } from '@sveltejs/kit';

export const load = async ({ fetch }: any) => {
    const res = await fetch(`https://store-server-murraycopps.vercel.app/`);
    const data = await res.json();
    console.log(data);
    return {
        items: data
    }

}
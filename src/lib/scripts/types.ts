interface Item {
	_id: string;
	url: string;
	name: string;
	price: number;
	description: string;
	quantity: number;
	rating: number;
	shoeType?: string;
	type: string;
	image: string;
}

interface CartItem extends Item {
	cartQuantity: number;
}

export type { Item, CartItem };

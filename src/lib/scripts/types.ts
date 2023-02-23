type Item = {
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

type CartItem = {
    name: string;
    price: number;
    quantity: number;
}

export type { Item, CartItem };
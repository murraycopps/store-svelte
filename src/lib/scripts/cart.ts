import type { CartItem, Item } from "./types";

export default class cart {

    static items: CartItem[] = [];

    static addItem(item: Item, quantity: number) {
        const cartItem = this.items.find(cartItem => cartItem.name === item.name);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.items.push({
                name: item.name,
                price: item.price,
                quantity: quantity
            });
        }
        console.log(this.items);
    }

    static removeItem(name: string) {
        this.items.filter(item => item.name !== name);
    }
    static getItems() {
        return this.items;
    }
    static getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price;
        });
        return total;
    }
    static getQuantity(name: string) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            return item.quantity;
        }
        return 0;
    }
}
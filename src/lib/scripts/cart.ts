import type { CartItem, Item } from "./types";

export default class cart {

    static items: CartItem[] = [];

    static addItem(item: Item, quantity: number) {
        const cartItem = this.items.find(cartItem => cartItem.name === item.name);
        if (cartItem) {
            cartItem.cartQuantity += quantity;
        } else {
            this.items.push({
                ...item,
                cartQuantity: quantity
            });
        }
    }

    static removeItem(name: string) {
        this.items = this.items.filter(item => item.name !== name);
    }
    static getItems() {
        return this.items;
    }
    static getItem(name: string) {
        return this.items.find(item => item.name === name);
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
    static increaseQuantity(name: string) {
        const item = this.items.find(item => item.name === name);
        if (item && item.cartQuantity < item.quantity) {
            item.cartQuantity++;
        }
    }
    static decreaseQuantity(name: string) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            item.cartQuantity--;
            if (item.cartQuantity === 0) {
                this.removeItem(name);
            }
        }
    }
    static clearCart() {
        this.items = [];
    }
}
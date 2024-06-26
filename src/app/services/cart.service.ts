import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart: any[] = [];

    constructor() {
        this.loadCart();
    }

    private saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    private loadCart() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.cart = JSON.parse(storedCart);
        }
    }

    addToCart(medicine: any) {
        console.log(medicine);
        const existingItem: any = this.cart.find((item: any) => item.medicine_id === medicine.medicine_id);
        if (existingItem) {

            existingItem.quantity += 1;
        } else {

            this.cart.push({ ...medicine, quantity: 1 });
        }

        this.saveCart();
    }

    getCart() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: any[] = [];
  partialAvailability: any[] = [];
  constructor(private apiService: ApiService, private cartService: CartService, private router: Router) { }


  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  checkout() {
    this.router.navigateByUrl('landingPage/checkout')
  }

  getDefaultImage() {
    return '../../../assets/medicine1.jfif';
  }

  addMedicine() {
    this.router.navigateByUrl('landingPage/dashboard')
  }
}

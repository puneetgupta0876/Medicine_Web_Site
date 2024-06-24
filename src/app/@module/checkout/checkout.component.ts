import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkOutPatient: any[] = [];
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.placeOrderDetails();
  }

  placeOrderDetails() {
    const placeOrderDetails = JSON.parse(localStorage.getItem('placeOrderDeatails') || '[]');
    this.checkOutPatient = [placeOrderDetails[placeOrderDetails.length - 1]];
    this.updateTotalPrice();
  }

  increaseQuantity() {
    this.checkOutPatient[0].quantity++;
    this.updateTotalPrice();
    this.updateLocalStorage();
  }

  decreaseQuantity() {
    if (this.checkOutPatient[0].quantity > 1) {
      this.checkOutPatient[0].quantity--;
      this.updateTotalPrice();
      this.updateLocalStorage();
    }
  }

  updateTotalPrice() {
    this.checkOutPatient[0].totalPrice = this.checkOutPatient[0].price * this.checkOutPatient[0].quantity;
  }

  updateLocalStorage() {
    let placeOrderDetails = JSON.parse(localStorage.getItem('placeOrderDeatails') || '[]');
    placeOrderDetails[placeOrderDetails.length - 1] = this.checkOutPatient[0];
    localStorage.setItem('placeOrderDeatails', JSON.stringify(placeOrderDetails));
  }

  onSubmit() {
    window.alert('Your Order is Successfully Place')
    this.route.navigateByUrl('landingPage/order-details');
  }
}

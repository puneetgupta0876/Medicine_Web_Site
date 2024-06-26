import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {
  orderForm: FormGroup;
  cart: any[] = [];
  constructor(private fb: FormBuilder, private route: Router, private apiService: ApiService, private cartService: CartService) {
    this.orderForm = this.fb.group({
      patient_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      chemist_id: ['', Validators.required],
      delivery_type: ['delivery', Validators.required],
      latitude: [12.970612, Validators.required],
      longitude: [77.6382433, Validators.required],

    });
  }

  ngOnInit(): void {
    this.getCurrentLocation();
    this.cart = this.cartService.getCart();
    console.log(this.cart);

  }




  addItem(): void {
    this.route.navigateByUrl('/landingPage/add-cart')
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const formData = new FormData();
      const cartItems = this.cartService.getCart().map(item => ({
        medicine_id: item.medicine_id,
        quantity: item.quantity
      }));
      console.log(formData);
      formData.append('apikey', 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3');
      formData.append('patient_name', this.orderForm.get('patient_name')?.value);
      formData.append('mobile', this.orderForm.get('mobile')?.value);
      formData.append('address', this.orderForm.get('address')?.value);
      formData.append('city', this.orderForm.get('city')?.value);
      formData.append('state', this.orderForm.get('state')?.value);
      formData.append('zipcode', this.orderForm.get('zipcode')?.value);
      formData.append('chemist_id', this.orderForm.get('chemist_id')?.value);
      formData.append('delivery_type', this.orderForm.get('delivery_type')?.value);
      formData.append('latitude', this.orderForm.get('latitude')?.value);
      formData.append('longitude', this.orderForm.get('longitude')?.value);
      formData.append('auto_assign', 'true');
      formData.append('items', JSON.stringify(cartItems));

      this.apiService.placeOrder(formData).subscribe((response: any) => {
        if (response.status_code === '1') {
          alert('Order placed successfully!');
          this.route.navigateByUrl('/landingPage/dashboard')
        } else {
          alert('Failed to place order. Please try again.');
        }
      });
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);

      });
    }


  }
}

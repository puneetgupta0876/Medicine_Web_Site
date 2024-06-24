import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {
  orderForm: FormGroup;
  patients: any[] = [];

  constructor(private fb: FormBuilder, private route: Router) {
    this.orderForm = this.fb.group({
      patient: [null, Validators.required],
      orderDetails: ['', Validators.required],
      medicine: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      totalPrice: [null],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.loadPatients();
    this.calculateTotalPrice();
  }

  loadPatients() {
    const storedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
    console.log(storedPatients);

    this.patients = storedPatients;
  }

  calculateTotalPrice(): void {
    this.orderForm.get('quantity')?.valueChanges.subscribe(quantity => {
      const price = this.orderForm.get('price')?.value || 0;
      this.orderForm.get('totalPrice')?.setValue(quantity * price);
      console.log(this.orderForm.value);

    });

    this.orderForm.get('price')?.valueChanges.subscribe(price => {
      const quantity = this.orderForm.get('quantity')?.value || 0;
      this.orderForm.get('totalPrice')?.setValue(quantity * price);
      console.log(this.orderForm.value);
    });
  }
  onSubmit() {
    console.log(this.orderForm);

    if (this.orderForm.valid) {
      const placeOrder = this.orderForm.value;
      console.log('Patient Added:', placeOrder);
      const placeOrderDeatails = JSON.parse(localStorage.getItem('placeOrderDeatails') || '[]');
      placeOrderDeatails.push(placeOrder);
      localStorage.setItem('placeOrderDeatails', JSON.stringify(placeOrderDeatails));
      this.route.navigateByUrl('landingPage/checkout')

    } else {
      window.alert('Please Enter Valide number')
    }

  }
}

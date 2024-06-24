import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  orderDetails: any = {};

  orderDate: string = '';
  receiveDate: string = '2024-07-01';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem('placeOrderDeatails') || '{}');
    this.orderDetails = orderDetails[orderDetails.length - 1];
    this.orderDate = new Date().toISOString().split('T')[0];
  }

  goToDashboard() {
    this.router.navigateByUrl('landingPage/dashboard');
  }
}

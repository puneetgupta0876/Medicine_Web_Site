import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Medicine } from 'src/app/services/medicine.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchTerm: string = '';
  medicines: Medicine[] = []

  constructor(private apiService: ApiService, private route: Router, private cartService: CartService) { }
  ngOnInit(): void {
    this.loadCartItems();
  }
  searchMedicines() {
    if (this.searchTerm) {
      console.log(this.searchTerm);
      this.apiService.searchMedicines(this.searchTerm).subscribe((res: any) => {
        console.log(res);
        if (res.data) {
          this.medicines = res.data.result;
          console.log(this.medicines);
        }
      }, (err => {
        console.error('Error fetching medicine data:', err);
      }));
    } else {
      window.alert('Please Enter medicines name ')
    }
  }

  gotoMedicineDetails(medicine: any) {
    console.log();

    this.route.navigate(['landingPage/view-medicine'], { queryParams: { medicineId: medicine } })
  }

  loadCartItems() {

  }

  addToCart(medicine: any): void {
    this.apiService.checkoutMedicines(medicine, 12.970612, 77.6382433, 5).subscribe(response => {
      if (response.data) {
        const availability = response.data.availability;
        availability.forEach((item: any) => {
          if (item.in_stock === 'yes') {
            alert(`Medicine' ${item.medicine_name} is Add to cart successfully`);
            this.cartService.addToCart(item);
            this.route.navigateByUrl('landingPage/add-cart')
          } else {

            alert(`Stock is not available for ${item.medicine_name}`);
          }
        });


      } else {
        alert('Medicine codes are not valid');
      }
    });
  }


}

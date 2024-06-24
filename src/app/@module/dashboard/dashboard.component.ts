import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Medicine } from 'src/app/services/medicine.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchTerm: string = '';
  medicines: Medicine[] = []

  constructor(private apiService: ApiService) { }

  searchMedicines() {
    if (this.searchTerm) {
      console.log(this.searchTerm);
      this.apiService.getMedicines(this.searchTerm).subscribe((res: any) => {
        console.log(res);

        this.medicines = res.data.result;
        console.log(this.medicines);

      }, (err => {
        console.error('Error fetching medicine data:', err);
      }));
    } else {
      window.alert('Please Enter medicines name ')
    }
  }
}

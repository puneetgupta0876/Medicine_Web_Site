import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-mediine',
  templateUrl: './view-mediine.component.html',
  styleUrls: ['./view-mediine.component.scss']
})
export class ViewMediineComponent {
  medicineData: any;

  constructor(private medicineService: ApiService, private activetedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activetedRoute.queryParams.subscribe((params: any) => {
      if (params) {
        let paramData = params.medicineId;
        this.getMedicineData(paramData)
      } else {
        console.error('error')
      }

    })
  }

  getMedicineData(param: string) {
    const medicineIds = [param];
    this.medicineService.getByIdMedicineData(medicineIds).subscribe((res) => {
      this.medicineData = this.medicineData = res.data;
    }, (err) => {
      console.error('Error fetching medicine data', err)
    });
  }
  getDefaultImage(): string {
    return '../../../assets/loginpage.jpg';
  }
  goToDashboard() {
    this.router.navigateByUrl('landingPage/dashboard');
  }

}

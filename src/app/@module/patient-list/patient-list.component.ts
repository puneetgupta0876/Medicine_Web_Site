import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients: any[] = [];


  constructor(private route: Router) { }

  ngOnInit(): void {
    this.placeOrderDetails()

  }

  viewDetails(patient: any) {
    this.route.navigate(['landingPage/view-patient'], { queryParams: { medicineId: patient } })
  }

  placeOrderDetails() {
    const placeOrderDetails = JSON.parse(localStorage.getItem('patients') || '[]');
    console.log(placeOrderDetails);

    this.patients = placeOrderDetails;
  }
  addPatient() {
    this.route.navigateByUrl('landingPage/add-patient')
  }
}

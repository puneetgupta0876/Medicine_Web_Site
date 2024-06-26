import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent {
  patient: any;


  constructor(private activetedRoute: ActivatedRoute, private _apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.activetedRoute.queryParams.subscribe((params: any) => {
      if (params) {
        let paramData = params.medicineId;
        this.getPatientDetails(paramData)
      } else {
        console.error('error')
      }

    })

  }
  getPatientDetails(patientId: string) {
    this._apiService.getPatientDetails(patientId).subscribe(res => {

      this.patient = res.data[0];
    });
  }


  gotoList() {
    this.router.navigateByUrl('landingPage/patient-list');
  }
}

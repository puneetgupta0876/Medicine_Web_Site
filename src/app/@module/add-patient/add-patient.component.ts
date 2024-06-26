import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private _apiService: ApiService) {
    this.patientForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      zipcode: ['', Validators.required],
      dob: [''],
      gender: ['', Validators.required],
      blood_group: ['']
    });
  }

  onSubmit() {
    console.log(this.patientForm, 'Data');

    if (this.patientForm.valid) {
      this._apiService.addPatient(this.patientForm.value).subscribe(
        response => {
          console.log('Patient added successfully', response);
          let data = {
            ...this.patientForm.value,
            patient_id: response.data.patient_id
          }
          const patient = data;

          const patients = JSON.parse(localStorage.getItem('patients') || '[]');
          patients.push(patient);
          localStorage.setItem('patients', JSON.stringify(patients));
          this.route.navigateByUrl('landingPage/patient-list')
        },
        error => {
          console.error('Error adding patient', error);
        }
      );
    }

  }

  gotoList(medicine: string) {
    this.route.navigate(['landingPage/patient-list'], { queryParams: { medicineId: medicine } })
  }
}


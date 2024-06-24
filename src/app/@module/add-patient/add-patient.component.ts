import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.patientForm, 'Data');
    if (this.patientForm.valid) {
      const patient = this.patientForm.value;
      console.log('Patient Added:', patient);
      const patients = JSON.parse(localStorage.getItem('patients') || '[]');
      patients.push(patient);
      localStorage.setItem('patients', JSON.stringify(patients));
      this.route.navigateByUrl('landingPage/place-order')

    } else {
      window.alert('Please Enter Valide number')
    }
  }
}

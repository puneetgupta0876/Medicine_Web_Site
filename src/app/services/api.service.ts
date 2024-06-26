import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrllogin = ' https://api.evitalrx.in/v1/patient/login';
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment/';
  private apikey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3';
  constructor(private http: HttpClient) { }
  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apikey}`
    });
  }

  login(userData: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const body = userData;
    return this.http.post(url, body, { headers: this.getHeaders() });
  }


  getByIdMedicineData(medicineIds: string[]): Observable<any> {
    const formData = new FormData();
    formData.append('medicine_ids', JSON.stringify(medicineIds));
    formData.append('apikey', 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3')
    return this.http.post(`${this.apiUrl}/medicines/view`, formData);
  }



  searchMedicines(searchstring: any): Observable<any> {
    let query = {
      "searchstring": searchstring,
      "apikey": this.apikey
    }
    return this.http.post(`${this.apiUrl}medicines/search`, query);
  }

  viewMedicines(medicine_ids: string[]): Observable<any> {
    const url = `${this.apiUrl}medicines/view`;
    const formData: FormData = new FormData();
    formData.append('apikey', this.apikey);
    formData.append('medicine_ids', JSON.stringify(medicine_ids));
    return this.http.post(url, formData);
  }

  checkoutMedicines(medicine_ids: string[], latitude: number, longitude: number, distance: number): Observable<any> {
    const url = `${this.apiUrl}orders/checkout`;

    const formData: FormData = new FormData();
    formData.append('apikey', this.apikey);
    formData.append('medicine_ids', JSON.stringify([medicine_ids]));
    formData.append('latitude', latitude.toString());
    formData.append('longitude', longitude.toString());
    formData.append('distance', distance.toString());
    return this.http.post(url, formData);
  }



  addPatient(patientData: any): Observable<any> {
    const formData = new FormData();
    formData.append('apikey', this.apikey);
    formData.append('mobile', patientData.mobile);
    formData.append('first_name', patientData.first_name);
    formData.append('last_name', patientData.last_name);
    formData.append('zipcode', patientData.zipcode);
    formData.append('dob', patientData.dob);
    formData.append('gender', patientData.gender);
    formData.append('blood_group', patientData.blood_group);

    return this.http.post(`${this.apiUrl}patients/add`, formData);
  }

  getPatientDetails(patientId: string): Observable<any> {
    const formData = new FormData();
    formData.append('apikey', this.apikey);
    formData.append('patient_id', patientId);

    return this.http.post(`${this.apiUrl}patients/view`, formData);
  }

  placeOrder(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}orders/place_order`, formData);
  }
}

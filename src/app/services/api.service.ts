import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = ' https://api.evitalrx.in/v1/patient/login';
  private apiKey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
  }

  login(userData: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const body = userData;
    return this.http.post(url, body, { headers: this.getHeaders() });
  }

  getMedicines(search: string): Observable<any> {
    console.log(search);

    let query = {
      "searchstring": search,
      "apikey": 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3'
    }
    return this.http.post(`${`https://dev-api.evitalrx.in/v1/fulfillment/medicines/search`}`, query);
  }

  addPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}patients`, patientData);
  }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}orders`, orderData);
  }
}

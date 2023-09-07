import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7006/api';


  constructor(private http: HttpClient) { }
  getCoutrylist(): Observable<any> {
    
        return this.http.get<any>(`${this.apiUrl}/Location/GetCountryList`);
  }
  getStatesByCountry(countryId: string): Observable<any[]> {
    debugger;
    // Make an HTTP GET request to fetch the states for the selected country
    return this.http.get<any[]>(`${this.apiUrl}/Location/GetStateList/${countryId}`);
  }
  getcityBystate(stateId: string): Observable<any[]> {
    debugger;
    // Make an HTTP GET request to fetch the states for the selected country
    return this.http.get<any[]>(`${this.apiUrl}/Location/GetCityList/${stateId}`);
  }
}

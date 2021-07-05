import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Patient } from '../@Models/patient';

const httpOption = {'content-type': 'application/json'}

@Injectable({
  providedIn: 'root'
})
export class GestorServicesService {
  baseURLPatients = environment.apiURL + "/patients";

  constructor(
    private http: HttpClient
  ) {}

  addPatient(form: any): Observable<any>{
    const headers = httpOption;
    const fdata = JSON.stringify(form)
    console.log(fdata);
    return this.http.post(this.baseURLPatients, fdata, {headers});
  }

  getPatients(page: number): Observable<Patient[]>{
    const url = `${this.baseURLPatients}?page=${page}`;
    return this.http.get<Patient[]>(url);
  }

  getPatient(id: number): Observable<Patient>{
    const url = `${this.baseURLPatients}/${id}`;
    return this.http.get<Patient>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsServieService {

  constructor(private http:HttpClient) { }

  loadData() {
    return this.http.get('../../assets/sampledata.json');
  }
}

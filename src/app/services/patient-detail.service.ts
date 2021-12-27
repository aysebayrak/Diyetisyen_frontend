import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { PatientDetail } from '../models/patientDetail';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {

  apiUrl='https://localhost:44378/api/'

  constructor(private httpClient:HttpClient ) { }

  getPatientDetail(patientId:number):Observable<ListResponseModel<PatientDetail>>{
    let newPath = this.apiUrl + 'patients/getpatientdetail?patientId='+patientId
    return this.httpClient.get<ListResponseModel<PatientDetail>>(newPath)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Patient } from '../models/patient';
import { PatientDetail } from '../models/patientDetail';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl='https://localhost:44378/api/'

  constructor(private httpClient: HttpClient) { }


  getPatient(): Observable<ListResponseModel<Patient>>{
    let newPath = this.apiUrl+'patients/getpatientdetails';
    return this.httpClient.get<ListResponseModel<Patient>>(newPath);
  }
   
  getAllPatientDetails():Observable<ListResponseModel<PatientDetail>>{
    let newPath=this.apiUrl+"patients/getpatientdetails"
    return this.httpClient.get<ListResponseModel<PatientDetail>>(newPath);
  }

  getPatientDetailsByPatientId(patientId:number)  {
    let newPath=this.apiUrl+"patients/getpatientdetail?patientId=" +patientId;
    return this.httpClient.get<ListResponseModel<PatientDetail>>(newPath);
  }


  addPatient(patient:Patient):Observable<ResponseModel>{
    let newPath = this.apiUrl + "patients/add";
    return this.httpClient.post<ResponseModel>(newPath,patient)
  }
  upDatePatient(patient:Patient):Observable<ResponseModel>{
    let newPath = this.apiUrl + "patients/update";
    return this.httpClient.post<ResponseModel>(newPath,patient)
  }

  deletePatient(patient:Patient):Observable<ResponseModel>{
    let newPath = this.apiUrl + "patients/delete";
    return this.httpClient.post<ResponseModel>(newPath,patient)
  }
  
  getCurrentPatient(){
    return this.getCurrentPatient;
  }


  // getPatientById(patientId:number):Observable<SingleResponseModel<Patient>>{
  //    let newPath=this.apiUrl="patients/getbyid?id="+patientId
  //    return this.httpClient.get<SingleResponseModel<Patient>>(newPath);

  // }

  getPatientById(patientId:number):Observable<SingleResponseModel<Patient>>{
    let newPath=this.apiUrl+"patients/getbyid?id="+patientId;
    return this.httpClient.get<SingleResponseModel<Patient>>(newPath);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl='https://localhost:44378/api/'

  constructor(private httpClient: HttpClient) { }

  getDoctor(): Observable<ListResponseModel<Doctor>>{
    let newPath = this.apiUrl+'doctors/getall';
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath);
  }

  addDoctor(doctor:Doctor):Observable<ResponseModel>{
    let newPath = this.apiUrl + "doctors/add";
    return this.httpClient.post<ResponseModel>(newPath,doctor)
  }

  upDateDoctor(doctor:Doctor):Observable<ResponseModel>{
    let newPath = this.apiUrl + "doctors/update";
    return this.httpClient.post<ResponseModel>(newPath,doctor)
  }

  deleteDoctor(doctor:Doctor):Observable<ResponseModel>{
    let newPath = this.apiUrl + "doctors/delete";
    return this.httpClient.post<ResponseModel>(newPath,doctor)
  }



}

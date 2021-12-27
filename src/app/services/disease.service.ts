import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disease } from '../models/disease';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  apiUrl='https://localhost:44378/api/'

  constructor(private httpClient: HttpClient ) { }


  //sericsten api isteği yapabilmek için kodlarımı yazdım 
  getDiseases(): Observable<ListResponseModel<Disease>>{
    let newPath =this.apiUrl + "diseases/getall"
    return this.httpClient.get<ListResponseModel<Disease>>(newPath);
    

  }

  getByDiseaseId(diseaseId:number):Observable<ListResponseModel<Disease>>{
    let newPath = this.apiUrl + "diseases/getbydiseaseid?id="+diseaseId;
    return this.httpClient.get<ListResponseModel<Disease>>(newPath);
  }


  add(disease: Disease) : Observable<ResponseModel>{
    let newPath =this.apiUrl + "diseases/add"
    return this.httpClient.post<ResponseModel>(newPath, disease);
  }
  
  update(disease: Disease) : Observable<ResponseModel>{
    let newPath =this.apiUrl + "diseases/update"
    return this.httpClient.post<ResponseModel>(newPath, disease);
  }

  delete(disease: Disease) : Observable<ResponseModel>{
    let newPath =this.apiUrl + "diseases/delete"
    return this.httpClient.post<ResponseModel>(newPath, disease);
  }
}

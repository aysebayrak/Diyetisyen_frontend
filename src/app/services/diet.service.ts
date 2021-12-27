import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diet } from '../models/diet';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class DietService {
    apiUrl='https://localhost:44378/api/'

  constructor(private httpClient: HttpClient) { }




  getDiets(): Observable<ListResponseModel<Diet>>{
    let newPath=this.apiUrl+"diets/getall"
    return this.httpClient.get<ListResponseModel<Diet>>(newPath);

  }

  getByDietId(dietId:number):Observable<ListResponseModel<Diet>>{
    let newPath = this.apiUrl + "diets/getbydietid?id="+dietId;
    return this.httpClient.get<ListResponseModel<Diet>>(newPath);
  }


  add(diet: Diet) : Observable<ResponseModel>{
    let newPath =this.apiUrl + "diets/add"
    return this.httpClient.post<ResponseModel>(newPath, diet);
  }

  update(diet: Diet) : Observable<ResponseModel>{
    let newPath =this.apiUrl + "diets/update"
    return this.httpClient.post<ResponseModel>(newPath, diet);
  }

  delete(diet:Diet): Observable<ResponseModel>{
    let newPath = this.apiUrl +"diets/delete";
    return this.httpClient.post<ResponseModel>(newPath,diet);
  }
  


}

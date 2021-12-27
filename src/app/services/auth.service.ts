import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login';
import { TokenModel } from '../models/token';
import { RegisterModel } from '../models/register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='https://localhost:44378/api/'

  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService) { }



    login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
      let newPath = this.apiUrl + 'auth/login';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);
    }
  
    isAuthenticated(){
      if(localStorage.getItem('token')){
        return true;
      }else{
        return false;
      }
    }
  
    register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
      let newPath = this.apiUrl + 'auth/register';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel);
    }
  
    logOut() {
      localStorage.removeItem("token");  //silme
      localStorage.removeItem("user");
      localStorage.removeItem("email");
    }


}

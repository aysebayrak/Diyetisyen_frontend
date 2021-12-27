import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http' //http isteklri yapabilmek içn 
import {FormsModule,ReactiveFormsModule} from "@angular/forms" 
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"




import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DietComponent } from './components/diet/diet.component';
import { PatientComponent } from './components/patient/patient.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { NaviComponent } from './components/navi/navi.component';
import { DietAddComponent } from './components/diet-add/diet-add.component';


import {ToastrModule} from "ngx-toastr";
import { DiseaseAddComponent } from './components/disease-add/disease-add.component';
import { DietUpdateComponent } from './components/diet-update/diet-update.component';
import { DietListComponent } from './components/diet-list/diet-list.component';
import { DiseaseListComponent } from './components/disease-list/disease-list.component';
import { DiseaseUpdateComponent } from './components/disease-update/disease-update.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DatePipe } from '@angular/common';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { PatientHtmlComponent } from './components/patient-html/patient-html.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';

@NgModule({
  declarations: [  //kendi module
    AppComponent,
    DoctorComponent,
    LoginComponent,
    RegisterComponent,
    DietComponent,
    PatientComponent,
    DiseaseComponent,
    NaviComponent,
    DietAddComponent,
    DiseaseAddComponent,
    DietUpdateComponent,
    DietListComponent,
    DiseaseListComponent,
    DiseaseUpdateComponent,
    DoctorAddComponent,
    PatientAddComponent,
    PatientDetailComponent,
    PatientHtmlComponent,
    PatientUpdateComponent
    
  ],
  imports: [  //dışardan kendi yazmadığım modüller
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //backende http istekleirnde bulunabilmak içn olması gereken module
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    // DatePipe,
    // ConfirmationService,
    // DialogService,
    // LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

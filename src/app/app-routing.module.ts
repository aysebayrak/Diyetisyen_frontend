import { DoctorComponent } from './components/doctor/doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietAddComponent } from './components/diet-add/diet-add.component';
import { DietListComponent } from './components/diet-list/diet-list.component';
import { DietUpdateComponent } from './components/diet-update/diet-update.component';
import { DietComponent } from './components/diet/diet.component';
import { DiseaseAddComponent } from './components/disease-add/disease-add.component';
import { DiseaseListComponent } from './components/disease-list/disease-list.component';
import { DiseaseUpdateComponent } from './components/disease-update/disease-update.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { LoginComponent } from './components/login/login.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { PatientHtmlComponent } from './components/patient-html/patient-html.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { PatientComponent } from './components/patient/patient.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { DiseaseService } from './services/disease.service';

const routes: Routes = [
  {path:"diets",component:DietComponent},
  {path: "diets/add", component:DietAddComponent},
  {path:"diets/update/:dietId",component:DietUpdateComponent},
  {path:"diets/list",component:DietListComponent},


  {path:"diseases/add",component:DiseaseAddComponent},
  {path:"diseases/update/:diseaseId",component:DiseaseUpdateComponent},
  {path:"diseases/list",component:DiseaseListComponent},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},

  {path:"doctors/add",component:DoctorAddComponent,canActivate:[LoginGuard]},
  {path:"doctors/list",component:DoctorComponent,canActivate:[LoginGuard]},


  {path:"patients/add",component:PatientAddComponent,canActivate:[LoginGuard]},
  {path:"patients/detail/:patientId",component:PatientDetailComponent},
  {path:"patients",component:PatientComponent},
  {path:"patients/html/:patientId",component:PatientHtmlComponent},
  {path:"patients/update/:patientId",component:PatientUpdateComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

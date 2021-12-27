import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/diet';
import { Disease } from 'src/app/models/disease';
import { User } from 'src/app/models/user';
import {FormGroup, FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { DietService } from 'src/app/services/diet.service';
import { DiseaseService } from 'src/app/services/disease.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patientAddForm:FormGroup;

 // users:User[]=[];
  diets:Diet[]=[];
  diseases:Disease[]=[];

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private dietService:DietService,
    private diseaseService:DiseaseService,
    private toastrService:ToastrService,
    private patientService:PatientService
    
    ) { }

  ngOnInit(): void {
    this.createPatientAddForm();
    this.getDiet();
    this.getDisease();

  }

  createPatientAddForm(){
    this.patientAddForm=this.formBuilder.group({
      dietId:["",Validators.required],
      diseaseId:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      tc:["",Validators.required],
      size:["",Validators.required],
      age:["",Validators.required],
      weight:["",Validators.required]


    })

  }

  add(){
    if(this.patientAddForm.valid){
      let patientModel=Object.assign({},this.patientAddForm.value)
      this.patientService.addPatient(patientModel).subscribe(response=>{
        this.toastrService.success(response.message,"Hasta Eklendi")

      },responseError=>{
        if(responseError.errors.length>0){
          for(let i=0;i<responseError.error.Errors.length; i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")

          }
          
        }

      })
    }else{
      this.toastrService.error("Form Bilgilerini Eksiksiz Doldurunuz...","Dikkat")
    }
  }


  getDiet(){
    this.dietService.getDiets().subscribe(response=>{
      this.diets=response.data

    })
  }

  getDisease(){
    this.diseaseService.getDiseases().subscribe(response=>{
      this.diseases=response.data
    })
  }

}

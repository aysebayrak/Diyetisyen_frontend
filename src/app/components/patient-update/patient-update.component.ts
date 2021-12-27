import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Diet } from 'src/app/models/diet';
import { Disease } from 'src/app/models/disease';
import { Patient } from 'src/app/models/patient';
import { PatientDetail } from 'src/app/models/patientDetail';
import { DietService } from 'src/app/services/diet.service';
import { DiseaseService } from 'src/app/services/disease.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patientUpdateForm:FormGroup;
  patient:Patient
  diets:Diet[]=[];
  diseases:Disease[]=[];
  patientId:number;
  dietId:number;
  diseaseId:number;

  constructor(
    private formBuilder:FormBuilder,
    private patientService:PatientService,
    private dietService:DietService,
    private diseaseService:DiseaseService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.getPatientById(param['patientId']);

      this.getDiets();
      this.getDiseases();
      this.createPatientUpdateForm();
     
    })
    
    }

  // ngOnInit():void{
  //   this.activatedRoute.params.subscribe((params)=>{
  //     if([params['patientId']]){
  //       this.patientId=parseInt(params['patientId']);
  //       this.getPatientById,params['patientId'];
  //       this.getDiets();
  //       this.getDiseases();
        
  //     }
  //   });
  //   this.createPatientUpdateForm();
    
  // }
    

  getPatientById(patientId:number){
    this.patientService.getPatientById(patientId).subscribe(response =>{
      this.patient= response.data;

      this.getDiets();
      this.getDiseases();
       this.createPatientUpdateForm();

      
    })
  }


  getDiets(){
    this.dietService.getDiets().subscribe(response => {
      this.diets= response.data;
    })
  }

  getDiseases(){
    this.diseaseService.getDiseases().subscribe(response=>{
      this.diseases=response.data;
    })
  }

  createPatientUpdateForm(){
    this.patientUpdateForm=this.formBuilder.group({
      id:[this.patient.patientId,Validators.required],
      dietId:[this.patient.dietId,Validators.required],
      diseaseId:[this.patient.diseaseId,Validators.required]
    });
  }


  update(){
    let patient: Patient =Object.assign({},this.patientUpdateForm.value);
    if(!this.patientUpdateForm.valid){
      this.toastrService.warning('Lütfen boş bilgi bırakmayın', 'Dikkat');
      return;
    }
    this.patientService.upDatePatient(patient).subscribe(responseSuccess =>{
      return this.toastrService.success(responseSuccess.message, 'Başarılı');
    },responseError =>{
      this.toastrService.error(responseError.error.message);
    })

  }

  }
  



 

 
 


 









 




import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl,FormBuilder} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { DiseaseService } from 'src/app/services/disease.service';
@Component({
  selector: 'app-disease-add',
  templateUrl: './disease-add.component.html',
  styleUrls: ['./disease-add.component.css']
})
export class DiseaseAddComponent implements OnInit {

  diseaseAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private diseaseService:DiseaseService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createDiseaseAddForm();
  }


  createDiseaseAddForm(){
     this.diseaseAddForm=this.formBuilder.group({
       diseaseName:["",Validators.required]
     })
  }
  add(){
    if(this.diseaseAddForm.valid){
      let  diseaseModel=Object.assign({},this.diseaseAddForm.value)
      this.diseaseService.add(diseaseModel).subscribe(response=>{
        this.toastrService.success(response.message,"Hastalık Eklendi")
      },responseError=>{
        if(responseError.errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"dogrulama hatası")
        }
      }
     } )


    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }


}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiseaseService } from 'src/app/services/disease.service';
import { ActivatedRoute } from '@angular/router';
import { Disease } from 'src/app/models/disease';

@Component({
  selector: 'app-disease-update',
  templateUrl: './disease-update.component.html',
  styleUrls: ['./disease-update.component.css']
})
export class DiseaseUpdateComponent implements OnInit {
  diseaseUpdateForm: FormGroup;
  diseases:Disease[]  =[];
  diseaseId:number;

  constructor(   private toastrService: ToastrService,
    private diseaseService:DiseaseService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if([params['diseaseId']]){
        this.diseaseId=parseInt(params['diseaseId']);
        this.getByDiseaseId,params['diseaseId'];
      }
    });
    this.createDiseaseForm();
    


  }

  createDiseaseForm(){
    this.diseaseUpdateForm=this.formBuilder.group({
      id: [this.diseaseId,Validators.required],
      diseaseName:["",Validators.required],
    })
  }


  getByDiseaseId(diseaseId: number) {
    this.diseaseService.getByDiseaseId(diseaseId).subscribe((response) => {
      this.diseases = response.data;
    });
  } 


  
  updateDisease(){
    if(this.diseaseUpdateForm.valid){
      let diseaseModel=Object.assign({},this.diseaseUpdateForm.value);
      diseaseModel.diseaseId=Number(diseaseModel.id);
      this.diseaseService.update(diseaseModel).subscribe((response)=>{
        this.toastrService.success(response.message,'Başarılı');
      },
      (responseError)=>{
        if (responseError.error.Errors.length > 0){
          for (
            let i = 0;
            i < responseError.errorErrors.length;
            i++
          ) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'Doğrulama hatası'
            );

          }

        }

      }
      );
    }else{
      this.toastrService.warning(
        'Lütfen hastalık bilgilerini eksiksiz doldurunuz.'
      );
    }
    
    }




}

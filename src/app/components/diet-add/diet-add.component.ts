import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,Validators,FormControl,FormBuilder} from "@angular/forms"
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-add',
  templateUrl: './diet-add.component.html',
  styleUrls: ['./diet-add.component.css']
})
export class DietAddComponent implements OnInit {
  dietAddForm : FormGroup;

  
   constructor(private formBuilder:FormBuilder,
    private dietService:DietService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
     this.createDietAddForm();
  }
  createDietAddForm(){
    this.dietAddForm=this.formBuilder.group({
      dietName:["",Validators.required]

    })
  }
  add(){
    if(this.dietAddForm.valid){
      let dietModel=Object.assign({},this.dietAddForm.value)
      this.dietService.add(dietModel).subscribe(response=>{
        this.toastrService.success(response.message,"Diet Eklendi")
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
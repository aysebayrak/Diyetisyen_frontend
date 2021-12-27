import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Diet } from 'src/app/models/diet';

@Component({
  selector: 'app-diet-update',
  templateUrl: './diet-update.component.html',
  styleUrls: ['./diet-update.component.css']
})
export class DietUpdateComponent implements OnInit {
   dietUpdateForm :FormGroup;
   dietId:number;
   diets: Diet[]=[];

  constructor(private dietService :DietService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute

     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if([params['dietId']]){
        this.dietId=parseInt(params['dietId']);
        this.getByDietId, params['dietId'];
      }
    });
    this.createDietForm();
  }



  createDietForm(){
    this.dietUpdateForm=this.formBuilder.group({
      id: [this.dietId,Validators.required],
      dietName:["",Validators.required],
    })
  }
   
  
  
  getByDietId(dietId: number) {
    this.dietService.getByDietId(dietId).subscribe((response) => {
      this.diets = response.data;
    });
  }

  updateDiet(){
    if(this.dietUpdateForm.valid){
      let dietModel=Object.assign({},this.dietUpdateForm.value);
      dietModel.dietId=Number(dietModel.id);
      this.dietService.update(dietModel).subscribe((response)=>{
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
        'Lütfen diyet bilgilerini eksiksiz doldurunuz.'
      );
    }
    
    }
    
  }

  
  


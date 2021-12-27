import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import {FormGroup, FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  doctorAddForm:FormGroup;

  users:User[]=[];
 


  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private doctorService:DoctorService,
    private toastrService:ToastrService

    ) { }

  ngOnInit(): void {
    this.createDoctorAddForm();


  }

  createDoctorAddForm(){
    this.doctorAddForm=this.formBuilder.group({
     // userId:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      tc:["",Validators.required],
      salary:["",Validators.required]


    })
  }

  add(){
    if(this.doctorAddForm.valid){
      let doctorModel=Object.assign({},this.doctorAddForm.value)
      this.doctorService.addDoctor(doctorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Doktor Eklendi")
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


}

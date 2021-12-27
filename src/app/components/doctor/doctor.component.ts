import { Doctor } from './../../models/doctor';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Doctor[]=[];


  constructor(private toastrService: ToastrService,
    private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();


  }
  getDoctors(){
    this.doctorService.getDoctor().subscribe(response=>{
      this.doctors=response.data
    });
  }


}

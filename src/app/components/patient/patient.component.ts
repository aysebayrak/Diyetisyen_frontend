import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diet } from 'src/app/models/diet';
import { Disease } from 'src/app/models/disease';
import { Patient } from 'src/app/models/patient';
import { PatientDetail } from 'src/app/models/patientDetail';
import { DietService } from 'src/app/services/diet.service';
import { DiseaseService } from 'src/app/services/disease.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:PatientDetail[]=[];
  diets:Diet[]=[];
  diseases:Disease[]=[];
  dietId:number;
  diseaseId:number;

  constructor(private patientService:PatientService,
    private activatedRoute:ActivatedRoute,
    private dietService:DietService,
    private diseaseService:DiseaseService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.getPatients();
      // this.getDiets();
      // this.getDiseases();

    })
  }


  getPatients(){
    this.patientService.getAllPatientDetails().subscribe((response)=>{
      this.patients=response.data;

    })
  }

  getDiets(){
    this.dietService.getDiets().subscribe(response=>{
      this.diets=response.data;
    })
  }

  getDiseases(){
    this.diseaseService.getDiseases().subscribe(response=>{
      this.diseases=response.data;
    })
  }




}

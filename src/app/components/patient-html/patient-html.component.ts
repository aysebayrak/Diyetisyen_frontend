import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientDetail } from 'src/app/models/patientDetail';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-html',
  templateUrl: './patient-html.component.html',
  styleUrls: ['./patient-html.component.css']
})
export class PatientHtmlComponent implements OnInit {

  patients:PatientDetail[]=[];
  patientDto:PatientDetail

  constructor(private patientService:PatientService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["patientId"]){
        this.getPatientDetail(params["patientId"]);
      }
     
    });
    
  }


  getPatientDetail(patientId:number){
    this.patientService.getPatientDetailsByPatientId(patientId).subscribe((response) =>{
     this.patients=response.data;
      this.patientDto=response.data[0]
    })
  }
}

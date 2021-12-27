import { Component, OnInit } from '@angular/core';
import { Disease } from 'src/app/models/disease';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  diseases:Disease[]=[];

  constructor(private diseaseService :DiseaseService ) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(){
    this.diseaseService.getDiseases().subscribe((response=>{
         this.diseases=response.data;
    }))
  }

}

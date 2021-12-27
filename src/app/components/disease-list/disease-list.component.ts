import { Component, OnInit } from '@angular/core';
import { Disease } from 'src/app/models/disease';
import { ToastrService } from 'ngx-toastr';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})
export class DiseaseListComponent implements OnInit {
  diseases:Disease[]=[];

  constructor( private toastrService: ToastrService,
    private diseaseService:DiseaseService
    
    ) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(){
    this.diseaseService.getDiseases().subscribe(response=>{
      this.diseases=response.data
    });
  }

  delete(disease:Disease){
    this.diseaseService.delete(disease).subscribe(response=>{
      this.toastrService.success(disease.diseaseName+" Hastalık Silindi");
    })
  }


}

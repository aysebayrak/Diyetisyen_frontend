import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/diet';
import { ToastrService } from 'ngx-toastr';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-list',
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.css']
})
export class DietListComponent implements OnInit {
  diets: Diet[]=[];

  constructor(private toastrService: ToastrService,
    private dietService:DietService
    ) { }

  ngOnInit(): void {
    this.getDiets();


  }

  getDiets(){
    this.dietService.getDiets().subscribe(response=>{
      this.diets=response.data
    });
  }

  delete(diet:Diet){
    this.dietService.delete(diet).subscribe(response=>{
      this.toastrService.success(diet.dietName   +"  Diyet Silindi");
    })
  }

}
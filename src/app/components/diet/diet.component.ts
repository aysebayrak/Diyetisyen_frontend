import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';
 

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  diets :Diet[]=[];

  constructor(private dietService: DietService) { }

  ngOnInit(): void {
    this.getDiets();
  }

  getDiets(){
    this.dietService.getDiets().subscribe((response=>{
      this.diets=response.data;
      
      //subscribe için=
      
    }))
  }

}


import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';
import { ActivatedRoute } from '@angular/router';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})

export class FooddetailsComponent implements OnInit {
  food: IFood;
  constructor(private foodService:FoodService ,private router:ActivatedRoute) { }
getFood(){
  const id =+this.router.snapshot.paramMap.get('id');
  this.food = this.foodService.getFoodById(id);
}
  ngOnInit() {
   this.getFood();
   }
    
  }
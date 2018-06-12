import { Component, OnInit, Input } from '@angular/core';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-animal-food',
  templateUrl: './animal-food.component.html',
  styleUrls: ['./animal-food.component.css']
})
export class AnimalFoodComponent implements OnInit {
 foods : IFood[];
  constructor(private foodService: FoodService) { }
  getFood(){
    this.foods=this.foodService.getfoods();
  }
  ngOnInit() {
    this.getFood();
  }

}

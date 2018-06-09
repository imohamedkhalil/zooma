import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  constructor(private foodservice: FoodService) { }

  ngOnInit() {
  }
 public addFood(f){
  this.foodservice.addFood(f);
}
}

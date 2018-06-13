import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { FoodService } from '../../../../shared/services/foodservice/food.service';
@Component({
  selector: 'app-smallfood',
  templateUrl: './smallfood.component.html',
  styleUrls: ['./smallfood.component.css']
})
export class SmallfoodComponent implements OnInit {
food:IFood[];
  constructor(private foodservice:FoodService) { }
getfood(){
  this.food =this.foodservice.getfoods();
}
  ngOnInit() {
    this.getfood();
  }

}

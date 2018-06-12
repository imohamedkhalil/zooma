import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { FoodService } from '../../../../shared/services/foodservice/food.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {

@Input() food:IFood;
@Output() itemClicked = new EventEmitter<number>();

  constructor(private foodservice:FoodService) { }

  ngOnInit() {
  }
  public deleteFood(id){
    this.foodservice.deleteFood(id);
  }
  public editFood(id){
    this.itemClicked.emit(id);
  }
// public onItemClicked() {
//    this.itemClicked.emit();  
//   }
}

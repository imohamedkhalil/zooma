import { Component, OnInit} from '@angular/core';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-foodlisting',
  templateUrl: './foodlisting.component.html',
  styleUrls: ['./foodlisting.component.css']
})
export class FoodlistingComponent implements OnInit {

    public foods : IFood[];
    public foodEl: IFood;
    // @Output() itemSelected =new EventEmitter<IFood>();
  
    constructor(private foodService:FoodService) {}
  
    ngOnInit() {
      this.foods=this.foodService.getfoods();
    }
   foodEdit(id:number){
      this.foodEl=this.foodService.getFoodById(id);
  }
  public DisplayDetails(foodD : IFood)
  {
     //this.foodEl = foodD;
  }
  // public OnItemSelectd(food : IFood) {
  //    this.itemSelected.emit(food);
  }
  
  

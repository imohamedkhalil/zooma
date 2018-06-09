import { Component, OnInit ,Input} from '@angular/core';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { FoodService } from '../../../shared/services/foodservice/food.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodedit',
  templateUrl: './foodedit.component.html',
  styleUrls: ['./foodedit.component.css']
})
export class FoodeditComponent implements OnInit {
@Input() food:IFood;
  constructor(private foodservice:FoodService ,private router:Router, private routes : ActivatedRoute) { }

  ngOnInit() {
  }
  editFood(form){

   let f = this.foodservice.foods.indexOf(this.food);
   let updateFood={
     title:form.value.title = undefined ? this.food.title : form.value.title,
     subtitle:form.value.subtitle = undefined ? this.food.subtitle : form.value.subtitle,
     image:form.value.image = undefined ? this.food.image : form.value.image,
   };
  this.foodservice.foods[f]=updateFood;
  this.router.navigateByUrl('/food');
  }
}

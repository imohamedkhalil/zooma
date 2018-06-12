import { Injectable } from '@angular/core';
import { IFood } from '../../interfaces/IFood';

@Injectable({

  providedIn: 'root'
})

export class FoodService {

   foods :IFood[] = [
    { id :1,
      title :'Kaytee',
      subtitle:'See More',
      image:'../assets/food/a5.jpg'
    },
    { id:2,
      title:'Soulistic',
      subtitle:'See More',
      image:'../assets/food/as10.jpg'
    },
    { id:3,
      title:'Vitakraft',
      subtitle:'See More',
      image:'../assets/food/as1.jpg'
    },
    { id:4,
      title:'Vitakraft',
      subtitle:'See More',
      image:'../assets/food/as14.jpg'
    },
    { id:5,
      title:'Merrick',
      subtitle:'See More',
      image:'../assets/food/as4.jpeg'
    },
    { id:6,
      title:'LM Animal Farms',
      subtitle:'See More',
      image:'../assets/food/as11.jpg'
    },
    { id:7,
      title:'WholeHearted',
      subtitle:'See More',
      image:'../assets/food/as9.jpg'
    },
    { id:8,
      title:'LM Animal Farms',
      subtitle:'See More',
      image:'../assets/food/as3.jpg'
    },
    { id:9,
      title:'Mazuri',
      subtitle:'See More',
      image:'../assets/food/as7.jpg'
    },
    { id:10,
      title:'Merrick',
      subtitle:'See More',
      image:'../assets/food/as4.jpeg'
    },
    { id:11,
      title:'Pro Plan',
      subtitle:'See More',
      image:'../assets/food/as15.jpg'
    }
  ];
  
  constructor (){}

  public getfoods(): IFood[]
  {
    return this.foods;
  }
    
  
   getFoodById(id:number)
   {
     return this.foods.find(a=> a.id == id);
   }
   public addFood(form)
   {
     let food:IFood;
     food=form.value;
     this.foods.push(food);
   }
  public deleteFood(id){
    let food = this.foods.map(function(item){
      return item.id;
    }).indexOf(id);
    this.foods.splice(food,1);
  }
}

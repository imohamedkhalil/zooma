import { Injectable } from '@angular/core';
import { IFood } from '../../interfaces/IFood';

@Injectable({

  providedIn: 'root'
})

export class FoodService {

   foods :IFood[] = [
    { id :1,
      title :'Kaytee',
      foodName:'Zoo Med ',
      foodType:'Tortoise Food',
      subtitle:'See More',
      description:'Kaytee isnt simply a pet products manufacturer.It is dedicated to understanding the natural world and how animals interact in it. Taking pet food development to the next level, they are protectors of the environment and take every measure to produce foods and other pet products that are responsible,healthy and delicious',
      image:'../assets/food/a5.jpg',
      image2:'../assets/food/x1.png'
    },
    { id:2,
      title:'Soulistic',
      foodName:'Whole Hearted',
      foodType:'Dog Food',
      subtitle:'See More',
      description:'Soulistic was founded on creating a better cat food with unmatched quality and value for all finicky felines.All Soulistic foods are grain- and gluten-free with options for carrageenan-free recipes.',
      image:'../assets/food/as10.jpg',
      image2:'../assets/food/x2.jpg'
    },
    { id:3,
      title:'Vitakraft',
      foodName:'',
      foodType:'',
      subtitle:'See More',
      description:'VitaKraft Drops with Yogurt are calcium-enriched drops made with minerals and vitamins to help strengthen your dogs teeth and bones. These nutritious snacks are a great anytime treat, and make for the perfect training reward! Treats come in a resealable bag to preserve freshness.',
      image:'../assets/food/as1.jpg',
      image2:'../assets/food/x3.jpg'
    },
    { id:4,
      title:'Vitakraft',
      foodName:'Ocean Nutrition',
      foodType:'Fish food',
      subtitle:'See More',
      description:'VitaKraft Drops with Yogurt are calcium-enriched drops made with minerals and vitamins to help strengthen your dogs teeth and bones. These nutritious snacks are a great anytime treat, and make for the perfect training reward! Treats come in a resealable bag to preserve freshness.',
      image:'../assets/food/as14.jpg',
      image2:'../assets/food/x4.jpg'
    },
    { id:5,
      title:'Merrick',
      foodName:'Corn',
      foodType:'Hen food',
      subtitle:'See More',
      description:'Whether your whiskered companion prefers crunchy kibble or canned entrees swimming in gravy, we promise they’ll love Merrick cat food. Pet Goods is proud to carry this quality line of dry and wet food formulas that feature the finest in real, whole foods.',
      image:'../assets/food/as4.jpeg',
      image2:'../assets/food/imx2.jpgg'
    },
    { id:6,
      title:'LM Animal Farms',
      foodName:'Ocean Nutrition',
      foodType:'Fish food',
      subtitle:'See More',
      description:'These super-absorbent liners contain a unique polymer that locks in odors and moisture. A safe, efficient, and sanitary way to keep your birds cage clean. The super absorbent cotton layers pull moisture deep inside, keeping the upper layer dry to the touch and containing liquid messes and reducing odors.',
      image:'../assets/food/as11.jpg',
      image2:'../assets/food/x2.jpg'
    },
    { id:7,
      title:'WholeHearted',
      subtitle:'See More',
      description:'The WholeHearted Grain Free All Life Stages Chicken and Pea Recipe Dry Dog Food nurtures your pup with wholesome ingredients. Thoughtfully crafted with Omega-3 fatty acids, antioxidants, and canine probiotics, this formula packs maximum health benefits into each delicious bite.',
      image:'../assets/food/as9.jpg',
      image2:'../assets/food/imx2.jpgg'
    },
    { id:8,
      title:'LM Animal Farms',
      subtitle:'See More',
      description:'These super-absorbent liners contain a unique polymer that locks in odors and moisture. A safe, efficient, and sanitary way to keep your birds cage clean. The super absorbent cotton layers pull moisture deep inside, keeping the upper layer dry to the touch and containing liquid messes and reducing odors.',
      image:'../assets/food/as3.jpg',
      image2:'../assets/food/imx2.jpgg'
    },
    { id:9,
      title:'Mazuri',
      subtitle:'See More',
      description:'Mazuri exotic animal diets have been developed to provide quality nutrition for virtually every living exotic animal. Their formulas are researched and tested to give your animals the most nutritionally consistent diets available. Mazuri mission is to ensure that your pets reach their full potential—from exotic birds and reptiles to mammals and fish and everything in between.',
      image:'../assets/food/as7.jpg'
    },
    { id:10,
      title:'Merrick',
      subtitle:'See More',
      description:'Whether your whiskered companion prefers crunchy kibble or canned entrees swimming in gravy, we promise they’ll love Merrick cat food. Pet Goods is proud to carry this quality line of dry and wet food formulas that feature the finest in real, whole foods.',
      image:'../assets/food/as4.jpeg'
    },
    { id:11,
      title:'Pro Plan',
      subtitle:'See More',
      description:'Pro Plan® Savor™ Cat Food contains vitamins and antioxidants to promote a healthy immune system, digestive system & skin & coat. Designed specifically for your adult cat',
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

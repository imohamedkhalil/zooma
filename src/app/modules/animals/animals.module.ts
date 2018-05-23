import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { AnimalitemComponent } from './listing/animalitem/animalitem.component';
import { FilterComponentComponent } from './listing/filter-component/filter-component.component';
import { SmallComponentComponent } from './listing/small-component/small-component.component';
import { OneSmallComponent } from './listing/small-component/one-small-component/one-small.component';
import { AnimalFoodComponent } from './listing/animalitem/animal-food/animal-food.component';
import { AnimalDiseaseComponent } from './listing/animalitem/animal-disease/animal-disease.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListingComponent,
    AnimalitemComponent,
    FilterComponentComponent,
    SmallComponentComponent,
    OneSmallComponent,
    AnimalFoodComponent,
    AnimalDiseaseComponent
  ]
})
export class AnimalsModule { }

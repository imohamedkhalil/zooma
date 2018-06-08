import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { AnimalitemComponent } from './listing/animalitem/animalitem.component';
import { FilterComponentComponent } from './listing/filter-component/filter-component.component';
import { SmallComponentComponent } from './listing/small-component/small-component.component';
import { OneSmallComponent } from './listing/small-component/one-small-component/one-small.component';
import { AnimalFoodComponent } from './listing/animalitem/animal-food/animal-food.component';
import { AnimalDiseaseComponent } from './listing/animalitem/animal-disease/animal-disease.component';
import { AnimalThreatenComponent } from './listing/animalitem/animal-threaten/animal-threaten.component';
import { AnimalPredatorComponent } from './listing/animalitem/animal-predator/animal-predator.component';
import { RelatedAnimalComponent } from './listing/animalitem/related-animal/related-animal.component';
import { SmallAnimalPredthreComponent } from './listing/animalitem/small-animal-predthre/small-animal-predthre.component';
import { AddAnimalComponent } from './listing/add-animal/add-animal.component';
import { AnimaladdfoodComponent } from './listing/animalitem/animal-add/animaladdfood/animaladdfood.component';
import { AnimaladddiseaseComponent } from './listing/animalitem/animal-add/animaladddisease/animaladddisease.component';
import { AnimaladdpredatorComponent } from './listing/animalitem/animal-add/animaladdpredator/animaladdpredator.component';
import { AnimaladdthreatenComponent } from './listing/animalitem/animal-add/animaladdthreaten/animaladdthreaten.component';
import { EditAnimalComponent } from './listing/edit-animal/edit-animal/edit-animal.component';

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
    AnimalDiseaseComponent,
    AnimalThreatenComponent,
    AnimalPredatorComponent,
    RelatedAnimalComponent,
    SmallAnimalPredthreComponent,
    AddAnimalComponent,
    AnimaladdfoodComponent,
    AnimaladddiseaseComponent,
    AnimaladdpredatorComponent,
    AnimaladdthreatenComponent,
    EditAnimalComponent
  ]
})
export class AnimalsModule { }

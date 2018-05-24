import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';

import './modules/homepage/homepage.module.ts';
import { ListingComponent } from 'src/app/modules/animals/listing/listing.component';
import { AnimalitemComponent } from 'src/app/modules/animals/listing/animalitem/animalitem.component';
import { SmallComponentComponent } from 'src/app/modules/animals/listing/small-component/small-component.component';
import { FilterComponentComponent } from 'src/app/modules/animals/listing/filter-component/filter-component.component';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { OneSmallComponent } from 'src/app/modules/animals/listing/small-component/one-small-component/one-small.component';
import { AnimalFoodComponent } from 'src/app/modules/animals/listing/animalitem/animal-food/animal-food.component';
import { AnimalDiseaseComponent } from 'src/app/modules/animals/listing/animalitem/animal-disease/animal-disease.component';
import { AnimalThreatenComponent } from 'src/app/modules/animals/listing/animalitem/animal-threaten/animal-threaten.component';
import { AnimalPredatorComponent } from 'src/app/modules/animals/listing/animalitem/animal-predator/animal-predator.component';
import { RelatedAnimalComponent } from 'src/app/modules/animals/listing/animalitem/related-animal/related-animal.component';
import { SmallAnimalPredthreComponent } from 'src/app/modules/animals/listing/animalitem/small-animal-predthre/small-animal-predthre.component';

import { ZooComponent } from './modules/homepage/homepageview/zoos/zoo.component';
import { ShowhomepageComponent } from './modules/homepage/homepageview/shows/showhomepage.component';
import { NewshomepageComponent } from './modules/homepage/homepageview/news/newshomepage.component';
import { AnimalhomepageComponent } from './modules/homepage/homepageview/animalcategouries/animalhomepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AddAnimalComponent } from 'src/app/modules/animals/listing/add-animal/add-animal.component';
import { AnimaladdfoodComponent } from 'src/app/modules/animals/listing/animalitem/animal-add/animaladdfood/animaladdfood.component';
import { AnimaladddiseaseComponent } from 'src/app/modules/animals/listing/animalitem/animal-add/animaladddisease/animaladddisease.component';
import { AnimaladdpredatorComponent } from 'src/app/modules/animals/listing/animalitem/animal-add/animaladdpredator/animaladdpredator.component';
import { AnimaladdthreatenComponent } from 'src/app/modules/animals/listing/animalitem/animal-add/animaladdthreaten/animaladdthreaten.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    ListingComponent,
    AnimalitemComponent,
    AnimalFoodComponent,
    AnimalDiseaseComponent,
    AnimalThreatenComponent,
    AnimalPredatorComponent,
    RelatedAnimalComponent,
    SmallAnimalPredthreComponent,
    SmallComponentComponent,
    FilterComponentComponent,
    OneSmallComponent,
    ZooComponent,
    ShowhomepageComponent,
    NewshomepageComponent,
    AnimalhomepageComponent,
    HeaderComponent,
    FooterComponent,
    AddAnimalComponent,
    AnimaladdfoodComponent,
    AnimaladddiseaseComponent,
    AnimaladdpredatorComponent,
    AnimaladdthreatenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'animals' , component: ListingComponent},
      // {path: 'animals', component: SmallComponentComponent},
      {path: 'animals/details/:id', component: AnimalitemComponent},
      {path: 'add', component: AddAnimalComponent},
      {path: '', component: HomepageviewComponent}
  ])
],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import './modules/homepage/homepage.module.ts';

import { MedicineListingComponent } from './modules/medicine/listing/medicine-listing/medicine-listing.component';
import { MedicineService } from './shared/services/medicineservice/medicine.service';
import { AddMedicineComponent } from './modules/medicine/add-medicine/add-medicine.component';
import { MedicineDetailComponent } from './modules/medicine/details/medicine-detail/medicine-detail.component';
import { FilterComponent } from './modules/medicine/listing/filter/filter.component';
import { EditMedicineComponent } from './modules/medicine/edit-medicine/edit-medicine.component';

import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import { ZoolistingComponent } from 'src/app/modules/zoos/zoolisting/zoolisting.component';
import { ZooitemComponent } from 'src/app/modules/zoos/zoolisting/zooitem/zooitem.component';
import { ZoofilterComponent } from 'src/app/modules/zoos/zoolisting/zoofilter/zoofilter.component';
import { ZooCollectionComponent } from 'src/app/modules/zoos/zoolisting/zoo-collection/zoo-collection.component';

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

import { ShowlistingComponent } from './modules/shows/showslist/showlisting.component';
import { ShowitemComponent } from './modules/shows/showslist/showitem/showitem.component';
import { ShowdetailsComponent } from './modules/shows/showdetails/showdetails.component';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { ShowaddComponent } from './modules/shows/showadd/showadd.component';

import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ZoodetailsComponent } from 'src/app/modules/zoos/zoodetails/zoodetails.component';
import { ZooheaderComponent } from 'src/app/modules/zoos/zoodetails/zoodetailspage/zooheader/zooheader.component';
import { ZoosliderComponent } from 'src/app/modules/zoos/zoodetails/zoodetailspage/zooslider/zooslider.component';
import { AddZooFormComponent } from 'src/app/modules/zoos/zoolisting/add-zoo-form/add-zoo-form.component';
import { EditZooComponent } from 'src/app/modules/zoos/edit-zoo/edit-zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    ZoolistingComponent,
    ZooitemComponent,
    ZoofilterComponent,
    ZooCollectionComponent,
    ZooCollectionComponent,
    ListingComponent,
    MedicineListingComponent,
    MedicineDetailComponent,
    FilterComponent,
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
    AnimaladdthreatenComponent,
    ShowlistingComponent,
    ShowitemComponent,
    ShowdetailsComponent,
    ShowaddComponent,
    ZoodetailsComponent,
    ZooheaderComponent,
    ZoosliderComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    AddZooFormComponent,
    EditZooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'medicine', component: MedicineListingComponent },
      { path: 'medicine/details/:id', component: MedicineDetailComponent },
      { path: 'medicine/edit/:id', component:EditMedicineComponent },
      { path: 'listing', component: ListingComponent },
      {path: 'animals' , component: ListingComponent},
      {path: 'animals/details/:id', component: AnimalitemComponent},
      {path: 'add', component: AddAnimalComponent},
      {path: 'zoo', component: ZoolistingComponent},
      {path: 'zoo/details/:id', component: ZoodetailsComponent },
      { path: 'zoo/edit/:id', component:EditZooComponent },
      {path: 'show', component: ShowlistingComponent},
      {path: 'showdetails', component: ShowdetailsComponent},
      {path: 'addshow', component: ShowaddComponent},
      {path: '', component: HomepageviewComponent}
  ])
],
   providers: [
    AnimalService,
    ZooserviceService, 
    MedicineService, 
    ShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

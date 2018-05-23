import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';


import './modules/homepage/homepage.module.ts';

import { MedicineListingComponent } from './modules/medicine/listing/medicine-listing/medicine-listing.component';
import { MedicineService } from './shared/services/medicineservice/medicine.service';
import { MedicineDetailComponent } from './modules/medicine/details/medicine-detail/medicine-detail.component';
import { FilterComponent } from './modules/medicine/listing/filter/filter.component';


import { AppComponent } from './app.component'; 
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import { ZoolistingComponent } from 'src/app/modules/zoos/zoolisting/zoolisting.component';
import { ZooitemComponent } from 'src/app/modules/zoos/zoolisting/zooitem/zooitem.component';
import { ZoofilterComponent } from 'src/app/modules/zoos/zoolisting/zoofilter/zoofilter.component';
import { ZooCollectionComponent } from 'src/app/modules/zoos/zoolisting/zoo-collection/zoo-collection.component';

import { ListingComponent } from 'src/app/modules/animals/listing/listing.component';
import { AnimalitemComponent } from 'src/app/modules/animals/listing/animalitem/animalitem.component';
import { SmallComponentComponent } from 'src/app/modules/animals/listing/small-component/small-component.component';
import { FilterComponentComponent } from 'src/app/modules/animals/listing/filter-component/filter-component.component';
import { AnimalService } from 'src/app/modules/animals/animal.service';
import { OneSmallComponent } from 'src/app/modules/animals/listing/small-component/one-small-component/one-small.component';

import { ZooComponent } from './modules/homepage/homepageview/zoos/zoo.component';
import { ShowhomepageComponent } from './modules/homepage/homepageview/shows/showhomepage.component';
import { NewshomepageComponent } from './modules/homepage/homepageview/news/newshomepage.component';
import { AnimalhomepageComponent } from './modules/homepage/homepageview/animalcategouries/animalhomepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ZoosComponent } from './src/app/modules/zoos/zoos.component';
import { ZoodetailsComponent } from 'src/app/modules/zoos/zoodetails/zoodetails.component';
import { ZooheaderComponent } from 'src/app/modules/zoos/zoodetails/zoodetailspage/zooheader/zooheader.component';
import { ZoosliderComponent } from 'src/app/modules/zoos/zoodetails/zoodetailspage/zooslider/zooslider.component';
import { AddZooFormComponent } from 'src/app/modules/zoos/zoolisting/add-zoo-form/add-zoo-form.component';


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
    SmallComponentComponent,
    FilterComponentComponent,
    OneSmallComponent,
    ZooComponent,
    ShowhomepageComponent,
    NewshomepageComponent,
    AnimalhomepageComponent,
    HeaderComponent,
    FooterComponent,
    ZoodetailsComponent,
    ZooheaderComponent,
    ZoosliderComponent,
    AddZooFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'medicine', component: MedicineListingComponent},
      { path: 'medicine/details/:id' , component: MedicineDetailComponent},
      {path: 'listing' , component: ListingComponent},
      // {path: 'animals', component: SmallComponentComponent},
      {path: 'details/:id', component: AnimalitemComponent},
      {path: 'zoo', component: ZoolistingComponent},
      { path: 'zoo/details/:id', component: ZoodetailsComponent },
    ])
  ],
  
  providers: [AnimalService, ZooserviceService, MedicineService],

  bootstrap: [AppComponent]
})
export class AppModule { }

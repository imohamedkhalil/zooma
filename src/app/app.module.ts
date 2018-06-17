import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



import './modules/homepage/homepage.module.ts';

import { MedicineListingComponent } from './modules/medicine/listing/medicine-listing.component';
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
import { AddZooFormComponent } from 'src/app/modules/zoos/zoolisting/add-zoo-form/add-zoo-form.component';
import { EditshowComponent } from './modules/shows/editshow/editshow.component';
import { EditZooComponent } from 'src/app/modules/zoos/edit-zoo/edit-zoo.component';
import { SearchdataPipe } from './searchdata.pipe';
import { CreatezooComponent } from './modules/createzoo/createzoo.component';
import { EditAnimalComponent } from 'src/app/modules/animals/listing/edit-animal/edit-animal/edit-animal.component';
import { MedicineOneitemComponent } from './modules/medicine/listing/medicine-oneitem/medicine-oneitem.component';

import { CheckoutComponent } from './modules/createzoo/checkout/checkout.component';

import { FooddetailsComponent } from 'src/app/modules/food/fooddetails/fooddetails.component';
import { FooditemComponent } from 'src/app/modules/food/foodlisting/fooditem/fooditem.component';
import { FoodlistingComponent } from 'src/app/modules/food/foodlisting/foodlisting.component';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';
import { AddfoodComponent } from 'src/app/modules/food/addfood/addfood.component';
import { FoodeditComponent } from 'src/app/modules/food/foodedit/foodedit.component';
import { MapComponent } from 'src/app/modules/animals/listing/animalitem/map/map.component';
import { DiseaseDetailComponent } from 'src/app/modules/disease/details/disease-detail/disease-detail.component';
import { DiseaseListingComponent } from 'src/app/modules/disease/disease-listing/disease-listing.component';
import { AddDiseaseComponent } from 'src/app/modules/disease/add-disease/add-disease.component';
import { EditDiseaseComponent } from 'src/app/modules/disease/edit-disease/edit-disease.component';
import { DiseaseFilterComponent } from 'src/app/modules/disease/disease-listing/disease-filter/disease-filter.component';
import { DiseaseOneitemComponent } from 'src/app/modules/disease/disease-listing/disease-oneitem/disease-oneitem.component';
import { CarouselModule } from 'ngx-bootstrap';

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
    AddZooFormComponent,
    EditshowComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    AddZooFormComponent,
    EditZooComponent,
    SearchdataPipe,
    CreatezooComponent,
    EditAnimalComponent,
    MedicineOneitemComponent,
    CheckoutComponent,
    FooditemComponent,
    FoodlistingComponent,
    FooddetailsComponent,
    FilterComponent,
    AddfoodComponent, 
    FoodeditComponent,
    MapComponent,
    DiseaseListingComponent,
    DiseaseFilterComponent,
    DiseaseOneitemComponent,
    DiseaseDetailComponent,
    AddDiseaseComponent,
    EditDiseaseComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'medicine', component: MedicineListingComponent },
      { path: 'medicine/details/:id', component: MedicineDetailComponent },
      // { path: 'medicine/edit/:id', component: EditMedicineComponent },
      // { path: 'listing', component: ListingComponent },
      { path: 'animals', component: ListingComponent },
      { path: 'animals/details/:id', component: AnimalitemComponent },
      { path: 'add', component: AddAnimalComponent },
      { path: 'zoo', component: ZoolistingComponent },
      { path: 'zoo/details/:id', component: ZoodetailsComponent },
      { path: 'zoo/edit/:id', component: EditZooComponent },
      { path: 'show', component: ShowlistingComponent },
      { path: 'showdetails', component: ShowdetailsComponent },
      { path: 'addshow', component: ShowaddComponent },
      {path:'createzoo',component:CreatezooComponent},
      {path:'checkout',component: CheckoutComponent},
      { path:'food', component: FoodlistingComponent },
      { path:'food/details/:id', component: FooddetailsComponent },
      { path: 'disease', component: DiseaseListingComponent },
      { path: 'disease/details/:id', component: DiseaseDetailComponent },
      { path:'', component: HomepageviewComponent },
    ])
  ],
  
  providers: [
    AnimalService,
    ZooserviceService,
    MedicineService,
    ShowService,
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

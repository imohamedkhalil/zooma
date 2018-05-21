import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import { ZoolistingComponent } from 'src/app/modules/zoos/zoolisting/zoolisting.component';
import { ZooitemComponent } from 'src/app/modules/zoos/zoolisting/zooitem/zooitem.component';
import { ZoofilterComponent } from 'src/app/modules/zoos/zoolisting/zoofilter/zoofilter.component';
import { ZooCollectionComponent } from 'src/app/modules/zoos/zoolisting/zoo-collection/zoo-collection.component';

import './modules/homepage/homepage.module.ts';
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



@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    ZoolistingComponent,
    ZooitemComponent,
    ZoofilterComponent,
    ZooCollectionComponent,
    ListingComponent,
    AnimalitemComponent,
    SmallComponentComponent,
    FilterComponentComponent,
    OneSmallComponent,
    ZooComponent,
    ShowhomepageComponent,
    NewshomepageComponent,
    AnimalhomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'listing' , component: ListingComponent},
      // {path: 'animals', component: SmallComponentComponent},
      {path: 'details/:id', component: AnimalitemComponent}
  ])
],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AnimalService } from 'src/app/modules/animals/animal.service';
import { OneSmallComponent } from 'src/app/modules/animals/listing/small-component/one-small-component/one-small.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    ListingComponent,
    AnimalitemComponent,
    SmallComponentComponent,
    FilterComponentComponent,
    OneSmallComponent
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

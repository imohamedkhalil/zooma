import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import './modules/homepage/homepage.module.ts';
import { MedicineListingComponent } from './modules/medicine/listing/medicine-listing/medicine-listing.component';
import { MedicineService } from './modules/medicine/medicine.service';
import { MedicineDetailComponent } from './modules/medicine/details/medicine-detail/medicine-detail.component';
import { FilterComponent } from './modules/medicine/listing/filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    MedicineListingComponent,
    MedicineDetailComponent,
    FilterComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'medicine', component: MedicineListingComponent, 
        children: [
          { path: 'details', component: MedicineDetailComponent}
        ]
    },
    ])
  ],
  providers: [MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import './modules/homepage/homepage.module.ts';



@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

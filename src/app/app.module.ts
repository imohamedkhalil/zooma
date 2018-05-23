import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule}from '@angular/router'
import { AppComponent } from './app.component';
import { HomepageviewComponent } from './modules/homepage/homepageview/homepageview.component';
import { ZooComponent } from './modules/homepage/homepageview/zoos/zoo.component';
import { ShowhomepageComponent } from './modules/homepage/homepageview/shows/showhomepage.component';
import { NewshomepageComponent } from './modules/homepage/homepageview/news/newshomepage.component';
import { AnimalhomepageComponent } from './modules/homepage/homepageview/animalcategouries/animalhomepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ShowlistingComponent } from './modules/shows/showslist/showlisting.component';
import { ShowitemComponent } from './modules/shows/showslist/showitem/showitem.component';
import { ShowdetailsComponent } from './modules/shows/showdetails/showdetails.component';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { ShowaddComponent } from './modules/shows/showadd/showadd.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageviewComponent,
    ZooComponent,
    ShowhomepageComponent,
    NewshomepageComponent,
    AnimalhomepageComponent,
    HeaderComponent,
    FooterComponent,
    ShowlistingComponent,
    ShowitemComponent,
    ShowdetailsComponent,
    ShowaddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'show',component:ShowlistingComponent},
      {path:'showdetails',component:ShowdetailsComponent},
      {path:'addshow',component:ShowaddComponent},      
      {path:'',component:HomepageviewComponent},
      
  ]),
   FormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

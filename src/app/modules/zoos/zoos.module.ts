import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoolistingComponent } from './zoolisting/zoolisting.component';
import { ZooitemComponent } from './zoolisting/zooitem/zooitem.component';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ZoofilterComponent } from './zoolisting/zoofilter/zoofilter.component';
import { ZooCollectionComponent } from './zoolisting/zoo-collection/zoo-collection.component';
import { ZoodetailsComponent } from './zoodetails/zoodetails.component';
import { ZooheaderComponent } from './zoodetails/zoodetailspage/zooheader/zooheader.component';
import { ZoosliderComponent } from './zoodetails/zoodetailspage/zooslider/zooslider.component';
import { AddZooFormComponent } from './zoolisting/add-zoo-form/add-zoo-form.component';
import { EditZooComponent } from './edit-zoo/edit-zoo.component';
// import { DiseaseComponent } from './src/app/modules/disease/disease.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ZooserviceService],
  declarations: [
    ZoolistingComponent,
    ZooitemComponent,
    ZoofilterComponent,
    ZooCollectionComponent,
    ZoodetailsComponent,
    ZooheaderComponent,
    ZoosliderComponent,
    AddZooFormComponent,
    EditZooComponent

]
})
export class ZoosModule { }

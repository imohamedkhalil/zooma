import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoolistingComponent } from './zoolisting/zoolisting.component';
import { ZooitemComponent } from './zoolisting/zooitem/zooitem.component';
import { ZooserviceService } from 'src/app/modules/zoos/service/zooservice.service';
import { ZoofilterComponent } from './zoolisting/zoofilter/zoofilter.component';
import { ZooCollectionComponent } from './zoolisting/zoo-collection/zoo-collection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ZooserviceService],
  declarations: [ZoolistingComponent, ZooitemComponent, ZoofilterComponent, ZooCollectionComponent]
})
export class ZoosModule { }

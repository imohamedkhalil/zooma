import { Component, OnInit,Input } from '@angular/core';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import {ZooCollectionComponent} from '../zoolisting/zoo-collection/zoo-collection.component';

@Component({
  selector: 'app-zoolisting',
  templateUrl: './zoolisting.component.html',
  styleUrls: ['./zoolisting.component.css']
})
export class ZoolistingComponent implements OnInit {

  filterdata:string;
  constructor() { }

  ngOnInit() {
  }
  filterData(data:string){
  this.filterdata=data;
  console.log(this.filterdata);
  debugger;
  }
}

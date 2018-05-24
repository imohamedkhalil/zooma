import { Component, OnInit } from '@angular/core';
import {ZooitemComponent} from '../zooitem/zooitem.component';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
@Component({
  selector: 'app-zoo-collection',
  templateUrl: './zoo-collection.component.html',
  styleUrls: ['./zoo-collection.component.css']
})
export class ZooCollectionComponent implements OnInit {
  zoos:IZooSmallComponent[]=[];
  constructor(private zooserviceService:ZooserviceService) { }

  ngOnInit() {
    this.zoos=this.zooserviceService.getZooSmallComponent();
  }

}
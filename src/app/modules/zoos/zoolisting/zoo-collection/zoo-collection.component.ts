import { Component, OnInit } from '@angular/core';
import {ZooitemComponent} from '../zooitem/zooitem.component';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { IZoo } from 'src/app/shared/interfaces/IZooHomePage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zoo-collection',
  templateUrl: './zoo-collection.component.html',
  styleUrls: ['./zoo-collection.component.css']
})
export class ZooCollectionComponent implements OnInit {
  
  zoos:IZooSmallComponent[]=[];
  zoo: IZooSmallComponent;

  getzoo(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.zoo = this.zooservice.getzoo(id);
  }

  constructor(private zooservice:ZooserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.zoos=this.zooservice.getZooSmallComponent();
  }

}

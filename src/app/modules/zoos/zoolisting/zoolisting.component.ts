import { Component, OnInit,Input } from '@angular/core';
import { ZooserviceService } from 'src/app/modules/zoos/service/zooservice.service';
import { IZooSmallComponent } from 'src/app/modules/zoos/interfaces/zoointerface';
import{ZooCollectionComponent} from '../zoolisting/zoo-collection/zoo-collection.component';

@Component({
  selector: 'app-zoolisting',
  templateUrl: './zoolisting.component.html',
  styleUrls: ['./zoolisting.component.css']
})
export class ZoolistingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
     
  }

}

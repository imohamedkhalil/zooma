import { Component, OnInit } from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-zoo-form',
  templateUrl: './add-zoo-form.component.html',
  styleUrls: ['./add-zoo-form.component.css']
})
export class AddZooFormComponent implements OnInit {

  zooList:IZooSmallComponent[]=[];
   addZoo(form){
     var zoo : IZooSmallComponent;
     zoo = form.value;
     debugger;
     //this.zooList.push(zoo);
      this.zooservice.zoos.push(zoo);
     debugger;
    // this.router.navigate(['zoo']);
   }
  constructor(private zooservice: ZooserviceService,private router:Router) { }

  ngOnInit() {
  }

}

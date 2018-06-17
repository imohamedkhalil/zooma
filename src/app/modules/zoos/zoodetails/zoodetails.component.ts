import { Component, OnInit, Input } from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ActivatedRoute } from '@angular/router';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ShowService } from 'src/app/shared/services/showservice/show.service';


@Component({
  selector: 'app-zoodetails',
  templateUrl: './zoodetails.component.html',
  styleUrls: ['./zoodetails.component.css'],
 
})
export class ZoodetailsComponent implements OnInit {
  @Input() data:string;
  zoos:IZooSmallComponent[]=[];
  zoo: IZooSmallComponent;
  animals:IAnimal[];
  shows:IShow[];
  bounce: any;
  

 getzoo(){
    const id = +this.route.snapshot.paramMap.get('id');
     this.zoo = this.zooservice.getzoo(id);
  }
  getAnimals(){
    this.animals=this.animalservics.getAnimals();
  }
  getShows(){
    this.shows=this.showService.getShows();
  }
  constructor(private zooservice:ZooserviceService, private animalservics:AnimalService, private showService:ShowService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getzoo();
    this.getShows();
    this.getAnimals();
  }


}

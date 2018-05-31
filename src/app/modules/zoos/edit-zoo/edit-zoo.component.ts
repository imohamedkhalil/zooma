import { Component, OnInit } from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { Router } from '@angular/router';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-zoo',
  templateUrl: './edit-zoo.component.html',
  styleUrls: ['./edit-zoo.component.css']
})
export class EditZooComponent implements OnInit {

  zoo:IZooSmallComponent;
  zoos:IZooSmallComponent[]=[];
  
  getzoo(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.zoo = this.zooservice.getzoo(id);
  }
  saveZoo(form){
    var zoo: IZooSmallComponent;
    zoo = form.value;
    this.router.navigate(['/zoo']);  
  }

  constructor(private zooservice: ZooserviceService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.getzoo();
  }
  editZoo(form){
    var zoo: IZooSmallComponent;
    zoo = form.value;
  }
}

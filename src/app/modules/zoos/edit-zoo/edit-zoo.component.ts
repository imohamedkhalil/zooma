import { Component, OnInit, Input } from '@angular/core';
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
  @Input() Zoo:IZooSmallComponent;
  name:string;
  address:string;
  phone:number;
  email:string;  
  //  getzoo(){
  //    const id = +this.route.snapshot.paramMap.get('id');
  //    this.zoo = this.zooservice.getzoo(id);
  //  }
  //  saveZoo(form){
  //    var zoo: IZooSmallComponent;
  //    zoo = form.value;
  //    this.router.navigate(['/zoo']);  
  //  }

  constructor(private zooservice: ZooserviceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
  editZoo(f){
      var i=this.zooservice.zoos.indexOf(this.Zoo);
      var uptzoo={
        id:this.Zoo.id,
        name:f.value.name== undefined ? this.Zoo.name:f.value.name ,
        email:f.value.email == undefined ? this.Zoo.email:f.value.email ,
        address:f.value.address == undefined ? this.Zoo.address:f.value.address ,
        phone:f.value.phone == undefined ? this.Zoo.phone:f.value.phone,
        addressUrl:f.value.addressUrl == undefined ? this.Zoo.addressUrl:f.value.addressUrl,
        imgUrl:f.value.imgUrl == undefined ? this.Zoo.imgUrl:f.value.imgUrl,
        locImg:this.Zoo.locImg
     }
      this.zooservice.zoos[i]=uptzoo;
    
      this.address=undefined;
      this.name=undefined;
      this.phone=undefined;
      this.email=undefined;
  }
  cancelZoo(){
  this.address=undefined;
  this.name=undefined;
  this.phone=undefined;
  this.email=undefined;
  }
}


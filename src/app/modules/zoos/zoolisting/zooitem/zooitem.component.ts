import { Component, OnInit, Input , EventEmitter ,Output} from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zooitem',
  templateUrl: './zooitem.component.html',
  styleUrls: ['./zooitem.component.css']
})
export class ZooitemComponent implements OnInit {
  @Input() zoo: IZooSmallComponent;
  @Output() id=new EventEmitter<number>();
  zoos: IZooSmallComponent[] = [];

  //  getzoo() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //  this.zoo = this.zooservice.getzoo(id);
  //  }
  deleteZoo(id) {
    this.zooservice.deletezoo(id);
  }
  
  constructor(private zooservice: ZooserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  editZoo(id){
   this.id.emit(id);
  }

}

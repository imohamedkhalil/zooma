import { Component, OnInit , Input} from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';

@Component({
  selector: 'app-zooitem',
  templateUrl: './zooitem.component.html',
  styleUrls: ['./zooitem.component.css']
})
export class ZooitemComponent implements OnInit {

  constructor() { }
@Input() zoo: IZooSmallComponent;
  ngOnInit() {
  }

}

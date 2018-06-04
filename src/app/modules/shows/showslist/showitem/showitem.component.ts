import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';



@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
@Input() show:IShow;
@Output() id=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log(this.show);
  }
 edit(id){
   //console.log(id);
   this.id.emit(id);
 }
}

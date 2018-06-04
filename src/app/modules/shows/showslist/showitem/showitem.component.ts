import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';
import { ShowService } from 'src/app/shared/services/showservice/show.service';



@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
  delshow:IShow;
@Input() show:IShow;
@Output() id=new EventEmitter<number>();
  constructor(private showService: ShowService) { }

  ngOnInit() {
    console.log(this.show);
  }
 edit(id){
   this.id.emit(id);
 }
delete(id){
  debugger;
 this.delshow= this.showService.shows.find(a=>a.id ==id);
 if(this.delshow ==  undefined){
  this.delshow= this.showService.topshows.find(a=>a.id ==id);
  var i =this.showService.topshows.indexOf(this.delshow);
  this.showService.topshows.splice(i,1);
 }
 else{
  var i =this.showService.topshows.indexOf(this.delshow);
  this.showService.shows.splice(i,1);
 }
}
}

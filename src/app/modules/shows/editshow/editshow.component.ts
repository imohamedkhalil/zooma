import { Component, OnInit ,Input } from '@angular/core';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';
import { ShowService } from 'src/app/shared/services/showservice/show.service';

@Component({
  selector: 'app-editshow',
  templateUrl: './editshow.component.html',
  styleUrls: ['./editshow.component.css']
})
export class EditshowComponent implements OnInit {
 @Input() show:IShow;
 id:number;
 imgUrl:string;
 time:string;
 location:string;
 title:string;
 description:string;
//  newShow:IShow;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    if(this.show != undefined){
      this.id=this.show.id;
      this.imgUrl=this.show.imgUrl;
      this.time=this.show.time;
      this.location=this.show.location;
      this.title=this.show.title;
      this.description=this.show.description;
    }
 
  }
  editShow(f){
    // console.log(this.show);
    
    var uptshow=this.showService.shows.find(a=>a.id ==this.show.id);
    if(uptshow == undefined){
      uptshow=this.showService.topshows.find(a=>a.id ==this.show.id);
      i=this.showService.topshows.indexOf(uptshow);
      uptshow={
        id:this.show.id,
        title:f.value.title == undefined ? uptshow.title:f.value.title ,
        time:f.value.time == undefined ? uptshow.time:f.value.time ,
        location:f.value.location == undefined ? uptshow.location:f.value.location,
        description:f.value.description == undefined ? uptshow.description:f.value.description ,  
     }
     this.showService.topshows[i]=uptshow;
    }
    else{
      var i=this.showService.shows.indexOf(uptshow);
      uptshow={
        id:this.show.id,
        title:f.value.title == undefined ? uptshow.title:f.value.title ,
        time:f.value.time == undefined ? uptshow.time:f.value.time ,
        location:f.value.location == undefined ? uptshow.location:f.value.location,
        description:f.value.description == undefined ? uptshow.description:f.value.description ,  
     }
      this.showService.shows[i]=uptshow;
    }
   // console.log(f);  
     

    
    
    
    this.imgUrl=undefined;
    this.time=undefined;
    this.location=undefined;
    this.title=undefined;
    this.description=undefined;
  }
  cancelShow(){
    this.imgUrl=undefined;
    this.time=undefined;
    this.location=undefined;
    this.title=undefined;
    this.description=undefined;
  }
}

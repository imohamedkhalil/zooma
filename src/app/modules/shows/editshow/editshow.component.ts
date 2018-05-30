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
 imgUrl:string;
 time:string;
 location:string;
 title:string;
 description:string;
 newShow:IShow;
  constructor(private showService: ShowService) {}

  ngOnInit() {
  }
  editShow(f){
    console.log(this.show);
    var uptshow=this.showService.shows.find(a=>a.id ==this.show.id);
    //console.log(uptshow);
   // console.log(f);    
     uptshow={
        id:this.show.id,
        title:f.value.title == undefined ? uptshow.title:f.value.title ,
        time:f.value.time == undefined ? uptshow.time:f.value.time ,
        location:f.value.location == undefined ? uptshow.location:f.value.location,
        description:f.value.description == undefined ? uptshow.description:f.value.description ,
        
     }
    console.log(uptshow);    
    this.imgUrl="";
    this.time="";
    this.location="";
    this.title="";
    this.description="";
  }
  cancelShow(){
    this.imgUrl="";
    this.time="";
    this.location="";
    this.title="";
    this.description="";
  }
}

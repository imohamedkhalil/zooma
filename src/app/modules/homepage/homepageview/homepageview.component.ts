import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepageview',
  templateUrl: './homepageview.component.html',
  styleUrls: ['./homepageview.component.css']
})
export class HomepageviewComponent implements OnInit {
hide:boolean=true;
loggined:boolean;
username:string;
  constructor() { }

  ngOnInit() {
  }
admin(data){
this.loggined=data;
this.hide=false;
}
get(data){
this.username=data;
}
 
}
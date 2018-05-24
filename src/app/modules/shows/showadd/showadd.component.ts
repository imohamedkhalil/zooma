import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';

@Component({
  selector: 'app-showadd',
  templateUrl: './showadd.component.html',
  styleUrls: ['./showadd.component.css']
})
export class ShowaddComponent implements OnInit {
imgUrl:string;
time:string;
location:string;
title:string;
description:string;
newShow:IShow;
  constructor(private showService:ShowService) { }

  ngOnInit() {
  }
  add(){
   this.newShow={
     imgUrl:this.imgUrl,
     time:this.time,
     location:this.location,
     title:this.title,
     description:this.description
   }
   console.log(this.newShow);
  }
}

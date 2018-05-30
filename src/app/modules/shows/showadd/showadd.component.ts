import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';
import { Router } from '@angular/router';

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
  constructor(private showService:ShowService,private router:Router) { }
  ngOnInit() {
  }
  // add(){
  //  this.newShow={
  //    imgUrl:this.imgUrl,
  //    time:this.time,
  //    location:this.location,
  //    title:this.title,
  //    description:this.description
  //  }
  //  console.log(this.newShow);
  // }

  // zooList:IZooSmallComponent[]=[];
  addShow(form){
    var show: IShow;
    show = form.value;
    console.log(show);
    this.showService.shows.push(show);
    this.router.navigate(['/show']);
    this.imgUrl="";
    this.time="";
    this.location="";
    this.title="";
    this.description="";
    console.log(this.showService.shows);
  }
  cancelShow(){
    this.imgUrl="";
    this.time="";
    this.location="";
    this.title="";
    this.description="";
  }






}

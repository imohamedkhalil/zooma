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
  addShow(form){
    var show: IShow;
    show = form.value;
    console.log(show);
    if(show.title != undefined){
      show.id =this.showService.shows.length+1;
      this.showService.shows.push(show);
       this.router.navigate(['/show']);
    }   
    this.imgUrl=undefined;
    this.time=undefined;
    this.location=undefined;
    this.title=undefined;
    this.description=undefined;
    console.log(this.showService.shows);
  }
  cancelShow(){
    this.imgUrl=undefined;
    this.time=undefined;
    this.location=undefined;
    this.title=undefined;
    this.description=undefined;
  }

}

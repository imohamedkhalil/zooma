import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { animation } from '@angular/animations/src/animation_metadata';



@Component({
  selector: 'app-showlisting',
  templateUrl: './showlisting.component.html',
  styleUrls: ['./showlisting.component.css'],
  // , trigger, state, style ,transition ,animate
  animations: [
    // trigger('title', [
    //   state('none', style({ visibility: "hidden" })),
    //   state('x ', style({ transform: "translateX(-90px)" })),
    //   transition('none => x', animate('9000ms'))
    // ]),
      trigger('title',[
        transition(':enter',[animate('1000ms'),style({ transform: "translateX(-1000px)" })])
      ])
  ]
})
export class ShowlistingComponent implements OnInit, AfterViewInit {
  // state = 'none';
  shows: IShow[] = this.ShowService.shows;
  show:IShow;

  getShows(){
    this.shows = this.ShowService.getShows();
  }

  constructor(private ShowService: ShowService) { }
  
  ngOnInit() {
    this.getShows();
    this.shows = this.shows.slice(1);
  }

  ngAfterViewInit() {
    // this.state = 'x';
  }
 
  getId(id:number){
    this.show=this.ShowService.shows.find(a=>a.id == id);
 }

}

import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';

@Component({
  selector: 'app-showhomepage',
  templateUrl: './showhomepage.component.html',
  styleUrls: ['./showhomepage.component.css']
})
export class ShowhomepageComponent implements OnInit {
shows:IShow[]=[];
  constructor(private showService:ShowService) { }
  ngOnInit() {
  this.shows=this.showService.getShows();
  this.shows=this.shows.slice(2)
  }
  

}

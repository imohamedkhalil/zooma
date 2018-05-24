import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/shared/services/showservice/show.service';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';

@Component({
  selector: 'app-showlisting',
  templateUrl: './showlisting.component.html',
  styleUrls: ['./showlisting.component.css']
})
export class ShowlistingComponent implements OnInit {
shows:IShow[]=[];
  constructor(private ShowService:ShowService ) { }

  ngOnInit() {
    this.shows=this.ShowService.getShows();
    this.shows=this.shows.slice(1);
  }

}

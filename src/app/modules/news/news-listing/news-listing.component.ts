import { NEWS } from './../../../shared/services/newsService/mock-news';
import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
import { INews } from '../../../shared/interfaces/iNews';
import { ActivatedRoute } from '@angular/router';
import {NewsServiceService} from '../../../shared/services/newsService/news-service.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {

  news: INews[] = NEWS;
  New: INews;
  filterdata: string;

  filterData(data: string) {
    console.log(data);
    this.filterdata = data;
  }

  constructor( private newsService: NewsServiceService,
    private route: ActivatedRoute,
  ) {}
  getNews() {
    this.news = this.newsService.getNews();
  }

  getNew(id) {
    this.New = this.newsService.getNew(id);
  }

  public deleteNews(id) {
    this.newsService.deleteNews(id);
  }


  ngOnInit() {
    this.getNews();
  }

}

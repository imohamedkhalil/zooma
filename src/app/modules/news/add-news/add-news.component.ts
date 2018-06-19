import { NEWS } from './../../../shared/services/newsService/mock-news';
import { INews } from './../../../shared/interfaces/iNews';
import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from './../../../shared/services/newsService/news-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  news: INews[] = NEWS;
  image?: string;
  title?: string;
  description?: string;
  bySomeone?: string;
  date?: string;
  onSubmit(form) {
    this.newsService.addNew(form);
  }
  constructor(private newsService: NewsServiceService, private router: Router) { }

  ngOnInit() {
  }


}


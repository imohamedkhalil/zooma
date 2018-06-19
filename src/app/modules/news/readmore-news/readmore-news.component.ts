import { INews } from './../../../shared/interfaces/iNews';
import { NEWS } from './../../../shared/services/newsService/mock-news';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NewsServiceService} from './../../../shared/services/newsService/news-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-readmore-news',
  templateUrl: './readmore-news.component.html',
  styleUrls: ['./readmore-news.component.css']
})
export class ReadmoreNewsComponent implements OnInit {

  @Input() New: INews;
  @Input() data: string;
  news: INews[] = NEWS;
  @Output() editClicked = new EventEmitter<number>();

  constructor(private newsService: NewsServiceService,
     private route: ActivatedRoute,
     private router: Router) { }

     getNew() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.New = this.newsService.getNew(id);
    }


    public editNew(id) {
      this.editClicked.emit(id);
    }


  ngOnInit() {
    this.getNew();
  }

}

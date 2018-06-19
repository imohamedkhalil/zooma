import { INews } from './../../../../shared/interfaces/iNews';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsServiceService } from '../../../../shared/services/newsService/news-service.service';
import { ActivatedRoute } from '@angular/router';
import { NEWS } from '../../../../shared/services/newsService/mock-news';


@Component({
  selector: 'app-one-item-news',
  templateUrl: './one-item-news.component.html',
  styleUrls: ['./one-item-news.component.css']
})
export class OneItemNewsComponent implements OnInit {

  constructor(private newsService: NewsServiceService) { }
  @Input() data: string;
  @Input() New: INews ;
  @Output() editClicked = new EventEmitter<number>();

  public deleteNews(id) {
    this.newsService.deleteNews(id);
  }

  public editNew(id) {
    this.editClicked.emit(id);
  }
  ngOnInit() {
  }

}

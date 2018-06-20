import { INews } from './../../../shared/interfaces/iNews';
import { FormsModule, NgForm } from '@angular/forms';
import { NEWS } from './../../../shared/services/newsService/mock-news';
import { Component, OnInit, Input } from '@angular/core';
import {NewsServiceService} from './../../../shared/services/newsService/news-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  @Input() New: INews;
  news: INews[] = NEWS;

  image?: string;
  title?: string;
  description?: string;
  bySomeone?: string;
  date?: string;
  constructor(private newsService: NewsServiceService,
     private route: ActivatedRoute,
     private router: Router) { }
   getNew() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.New = this.newsService.getNew(id);
    }

    editNew(form) {
      this.New = this.newsService.getNew(this.New.id);
      const i = this.news.indexOf(this.New);
      this.New = {
        id: this.New.id,
        title : form.value.title == undefined ? this.New.title : form.value.title,
        image: form.value.image == undefined ? this.New.image : form.value.image,
        description : form.value.description == undefined ? this.New.description : form.value.description,
        date : form.value.date == undefined ? this.New.date : form.value.date,
        bySomeone: form.value.bySomeone == undefined ? this.New.bySomeone : form.value.bySomeone
      };
      console.log(form.value);
      this.news[i] =  this.New;
  }
 /* cancelNew() {
    this.title = undefined;
    this.image = undefined ;
    this.description = undefined;
    this.date = undefined ;
    this.bySomeone = undefined ;
  }*/
  ngOnInit() {
    this.getNew();
  }
  }


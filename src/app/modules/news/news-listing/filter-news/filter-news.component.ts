import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.css']
})
export class FilterNewsComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();

  set(filter: string) {

    switch (filter) {
      case 'showall':
        this.filter.emit('showall');
        break;
      case 'TopNews':
        this.filter.emit('TopNews');
        break;
      case 'LatestNews':
        this.filter.emit('LatestNews');
        break;
      case 'ZooNews':
        this.filter.emit('ZooNews');
        break;
      case 'AnimalNews':
        this.filter.emit('AnimalNews');
        break;
      case 'OldNews':
        this.filter.emit('OldNews');
        break;

    }
  }
  constructor() { }

  ngOnInit() {
  }

}

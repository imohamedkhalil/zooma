import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoofilter',
  templateUrl: './zoofilter.component.html',
  styleUrls: ['./zoofilter.component.css']
})
export class ZoofilterComponent implements OnInit {

  @Output() filter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  set(filter: string) {
    switch (filter) {
      case 'showall':
        this.filter.emit('showall');
        break;
      case 'Giraffes':
        this.filter.emit('Giraffes');
        break;
      case 'Fishes':
        this.filter.emit('Fishes');
        break;
      case 'Tortoise':
        this.filter.emit('Tortoise');
        break;
      case 'Cheetas':
        this.filter.emit('Cheetas');
        break;
      case 'Monkey':
        this.filter.emit('Monkey');
        break;

      case 'Horses':
        this.filter.emit('Horses');
        break;
        case 'Lions':
        this.filter.emit('Lions');
        break;
    }

  }
}

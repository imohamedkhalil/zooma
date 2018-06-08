import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  set(filter: string) {
    switch (filter) {
      case 'showall':
        this.filter.emit('showall');
        break;
      case 'dog':
        this.filter.emit('dog');
        break;
      case 'cat':
        this.filter.emit('cat');
        break;
      case 'Tortoise':
        this.filter.emit('Tortoise');
        break;
      case 'bird':
        this.filter.emit('bird');
        break;
      case 'Horses':
        this.filter.emit('Horses');
        break;
        case 'Fishes':
        this.filter.emit('Fishes');
        break;
    }
  }
}

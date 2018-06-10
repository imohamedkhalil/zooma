import { Component, OnInit , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disease-filter',
  templateUrl: './disease-filter.component.html',
  styleUrls: ['./disease-filter.component.css']
})
export class DiseaseFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  
    set(filter: string) {
      debugger;
      switch (filter) {
        case 'showall':
          this.filter.emit('showall');
          break;
        case 'Dogs':
          this.filter.emit('Dogs');
          break;
        case 'Cats':
          this.filter.emit('Cats');
          break;
        case 'Birds':
          this.filter.emit('Birds');
          break;
        case 'Horses':
          this.filter.emit('Horses');
          break;
        case 'Fishes':
          this.filter.emit('Fishes');
          break;
        case 'Tortoises':
          this.filter.emit('Tortoises');
          break;
      }
    }
  constructor() { }

  ngOnInit() {
  }

}

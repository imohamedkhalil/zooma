import { Component, OnInit } from '@angular/core';
// import { Animal } from 'src/app/modules/animals/animal';
// import { AnimalService } from 'src/app/modules/animals/animal.service';

@Component({
  selector: 'app-small-component',
  templateUrl: './small-component.component.html',
  styleUrls: ['./small-component.component.css']
})
export class SmallComponentComponent implements OnInit {

  // animals: Animal[];
  // getAnimals() {
  //   this.animals = this.animalService.getAnimals();
  // }

  constructor() { }

  ngOnInit() {
    // this.getAnimals();
  }
}

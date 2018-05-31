import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-one-small-component',
  templateUrl: './one-small.component.html',
  styleUrls: ['./one-small.component.css']
})
export class OneSmallComponent implements OnInit {

  animals: IAnimal [];
  getAnimals() {
    this.animals = this.animalService.getAnimals();
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

}

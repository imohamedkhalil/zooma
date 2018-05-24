import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-animal-threaten',
  templateUrl: './animal-threaten.component.html',
  styleUrls: ['./animal-threaten.component.css']
})
export class AnimalThreatenComponent implements OnInit {
  animals: IAnimal [];
  getAnimals() {
    this.animals = this.animalService.getAnimals();
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

}

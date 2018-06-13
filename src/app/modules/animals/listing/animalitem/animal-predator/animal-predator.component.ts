import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-animal-predator',
  templateUrl: './animal-predator.component.html',
  styleUrls: ['./animal-predator.component.css']
})
export class AnimalPredatorComponent implements OnInit {
  animals: IAnimal [];
  getAnimal() {
    this.animals = this.animalService.getAnimals();
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimal();
}

}

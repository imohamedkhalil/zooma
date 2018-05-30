import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-small-animal-predthre',
  templateUrl: './small-animal-predthre.component.html',
  styleUrls: ['./small-animal-predthre.component.css']
})
export class SmallAnimalPredthreComponent implements OnInit {
  animals: IAnimal [];
  getAnimals() {
    this.animals = this.animalService.getAnimals();
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

}

import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-related-animal',
  templateUrl: './related-animal.component.html',
  styleUrls: ['./related-animal.component.css']
})
export class RelatedAnimalComponent implements OnInit {
  animals: IAnimal [];
  getAnimals() {
    this.animals = this.animalService.getAnimals();
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

}

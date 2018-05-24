import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-small-component',
  templateUrl: './small-component.component.html',
  styleUrls: ['./small-component.component.css']
})
export class SmallComponentComponent implements OnInit {

  animals: IAnimal[];
  getAnimals() {
    this.animals = this.animalService.getAnimals();
  }

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }
}

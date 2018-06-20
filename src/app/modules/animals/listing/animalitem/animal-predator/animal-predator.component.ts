import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-animal-predator',
  templateUrl: './animal-predator.component.html',
  styleUrls: ['./animal-predator.component.css']
})
export class AnimalPredatorComponent implements OnInit {
  predators: IAnimal [];
  getPredators() {
    this.predators = this.animalService.getPredators();
  }
  public deletePredator(id){
    this.animalService.deletePredator(id); 
  }
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getPredators();
}

}

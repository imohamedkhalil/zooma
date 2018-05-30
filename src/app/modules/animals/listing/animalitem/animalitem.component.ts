import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-animalitem',
  templateUrl: './animalitem.component.html',
  styleUrls: ['./animalitem.component.css']
})
export class AnimalitemComponent implements OnInit {
  // animals: IAnimal [];
  animal: IAnimal;
  // getAnimals() {
  //   this.animals = this.animalService.getAnimals();
  // }
   getAnimal() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animal = this.animalService.getAnimal(id);
   }
  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.getAnimals();
    this.getAnimal();
  }

}

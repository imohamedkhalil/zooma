import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ANIMALS } from 'src/app/shared/services/animalservice/mock-animals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animalList: IAnimal[] = ANIMALS;

  addAnimal(form) {
    let animal: IAnimal;
    animal = form.value;
    this.animalList.push(animal);
    }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

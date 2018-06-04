import { Component, OnInit, Input, Output } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ANIMALS } from 'src/app/shared/services/animalservice/mock-animals';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() Animal: IAnimal;
  animals: IAnimal[] = this.animalService.animals;

  editAnimal(form) {
    this.Animal = this.animalService.getAnimal(this.Animal.id);
    let i = this.animalService.animals.indexOf(this.Animal);
    console.log(i);
    this.Animal = {
      name: form.value.name === undefined ? this.Animal.name : form.value.name,
      description: form.value.description === undefined ? this.Animal.description : form.value.description,
      type: form.value.type === undefined ? this.Animal.type : form.value.type,
      contienent: form.value.contienent === undefined ? this.Animal.contienent : form.value.continent,
      category: form.value.category === undefined ? this.Animal.category : form.value.category,
      lifeSpan: form.value.lifeSpan === undefined ? this.Animal.lifeSpan : form.value.lifeSpan,
      date: form.value.date === undefined ? this.Animal.date : form.value.date,
    };
    this.animals[i]= this.Animal;
  }

  constructor(private router: Router,private animalService: AnimalService,private route: ActivatedRoute) { }

  ngOnInit() {
  
  }
}

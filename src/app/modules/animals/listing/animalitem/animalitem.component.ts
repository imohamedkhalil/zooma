import { Component, OnInit } from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ActivatedRoute} from '@angular/router';
import { IFood } from 'src/app/shared/interfaces/IFood';
import { FoodService } from 'src/app/shared/services/foodservice/food.service';
import { Medicine } from 'src/app/shared/interfaces/medicine';
import { MedicineService } from 'src/app/shared/services/medicineservice/medicine.service';
@Component({
  selector: 'app-animalitem',
  templateUrl: './animalitem.component.html',
  styleUrls: ['./animalitem.component.css']
})
export class AnimalitemComponent implements OnInit {
  animal: IAnimal;
  diseases: Medicine[];
  getDisease() {
    this.diseases = this.diseaseService.getMedicines();
  }
   getAnimal() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animal = this.animalService.getAnimal(id);
   }
  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private diseaseService: MedicineService
    ) { }

  ngOnInit() {
    // this.getAnimals();
    this.getAnimal();
  }

}

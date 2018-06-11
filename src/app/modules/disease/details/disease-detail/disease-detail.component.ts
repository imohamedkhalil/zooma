import { Component, OnInit } from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { ActivatedRoute } from '@angular/router';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { Medicine } from 'src/app/shared/interfaces/medicine';
import { MedicineService } from 'src/app/shared/services/medicineservice/medicine.service';

@Component({
  selector: 'app-disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.css']
})
export class DiseaseDetailComponent implements OnInit {
  disease:IDisease;
  animals:IAnimal[];
  medicines:Medicine[];
  constructor(private medicineservice:MedicineService, private animalservics:AnimalService ,private diseaseservice:DiseaseService ,private route:ActivatedRoute) { }

  getDisease(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.disease = this.diseaseservice.getDisease(id);
  }
  getAnimals(){
    this.animals=this.animalservics.getAnimals();
  }
  getMedicine(){
    this.medicines=this.medicineservice.getMedicines();
  }
  
  ngOnInit() {
    this.getDisease();
    this.getAnimals();
    this.getMedicine();
  }

}

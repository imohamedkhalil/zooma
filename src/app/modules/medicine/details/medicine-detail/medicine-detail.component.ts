import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../../shared/services/medicineservice/medicine.service';
import { Medicine } from '../../../../shared/interfaces/medicine';
import { ActivatedRoute } from '@angular/router';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';
import { IDisease } from 'src/app/shared/interfaces/IDisease';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  medicine: Medicine;
  animals:IAnimal[];
  diseases:IDisease[];
  
  getMedicine(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicine = this.medicineService.getMedicine(id);
  }
  getAnimals(){
    this.animals=this.animalservics.getAnimals();
  }
  getDisease(){
    this.diseases=this.diseaesservice.getDiseases();
  }
  constructor(
    private medicineService: MedicineService,
    private animalservics:AnimalService,
    private diseaesservice:DiseaseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMedicine();
    this.getDisease();
    this.getAnimals();
  }
}


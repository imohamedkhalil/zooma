import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/shared/interfaces/medicine';
import { MedicineService } from 'src/app/shared/services/medicineservice/medicine.service';

@Component({
  selector: 'app-animal-disease',
  templateUrl: './animal-disease.component.html',
  styleUrls: ['./animal-disease.component.css']
})
export class AnimalDiseaseComponent implements OnInit {
  diseases: Medicine[];
  constructor(private diseaseService: MedicineService) { }
  getDisease() {
    this.diseases = this.diseaseService.getMedicines();
  }
  ngOnInit() {
    this.getDisease();
  }

}

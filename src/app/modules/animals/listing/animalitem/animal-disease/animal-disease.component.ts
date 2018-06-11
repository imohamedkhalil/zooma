import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';
import { IDisease } from 'src/app/shared/interfaces/IDisease';

@Component({
  selector: 'app-animal-disease',
  templateUrl: './animal-disease.component.html',
  styleUrls: ['./animal-disease.component.css']
})
export class AnimalDiseaseComponent implements OnInit {
  diseases: IDisease[];
  constructor(private diseaseService: DiseaseService) { }
  getDisease() {
    this.diseases = this.diseaseService.getDiseases();
  }
  ngOnInit() {
    this.getDisease();
  }

}

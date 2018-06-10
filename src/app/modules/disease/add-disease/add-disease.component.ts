import { Component, OnInit } from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.css']
})
export class AddDiseaseComponent implements OnInit {

  constructor(private diseaseservice:DiseaseService) { }
  addDisease(form){
    this.diseaseservice.addDisease(form);
  }
  ngOnInit() {
  }

}

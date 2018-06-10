import { Component, OnInit } from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { ActivatedRoute } from '@angular/router';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';

@Component({
  selector: 'app-disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.css']
})
export class DiseaseDetailComponent implements OnInit {
  disease:IDisease;

  constructor( private diseaseservice:DiseaseService ,private route:ActivatedRoute) { }

  getDisease(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.disease = this.diseaseservice.getDisease(id);
  }
  
  ngOnInit() {
    this.getDisease();
  }

}

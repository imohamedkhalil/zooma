import { Component, OnInit } from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';

@Component({
  selector: 'app-disease-listing',
  templateUrl: './disease-listing.component.html',
  styleUrls: ['./disease-listing.component.css']
})
export class DiseaseListingComponent implements OnInit {
 
  diseases:IDisease[];
  disease:IDisease;
  constructor(private diseaseservice:DiseaseService) { }
  getDiseases(){
    this.diseases = this.diseaseservice.getDiseases();
  }
  getDisease(id){
    this.disease=this.diseaseservice.getDisease(id);
  }
  ngOnInit() {
    this.getDiseases();
  }

}

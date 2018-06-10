import { Injectable } from '@angular/core';
import { IDisease } from "./../../interfaces/IDisease";
import { DISEASES } from "./mock-disease";

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor() { }
  public getDiseases() {
    return DISEASES;
  }

  public getDisease(id) {
    return DISEASES.find(disease => disease.id == id);
  }

  public addDisease(form) {
    var disease: IDisease;
    disease = form.value;
    DISEASES.push(disease);
  }

  public deleteDisease(id) {
    var disease = DISEASES.map(function (item) 
    { return item.id; }).indexOf(id);
    DISEASES.splice(disease, 1);
  }
}

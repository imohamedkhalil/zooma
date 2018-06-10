import { Component, OnInit, Input } from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';
import { DISEASES } from 'src/app/shared/services/diseaseservice/mock-disease';

@Component({
  selector: 'app-edit-disease',
  templateUrl: './edit-disease.component.html',
  styleUrls: ['./edit-disease.component.css']
})
export class EditDiseaseComponent implements OnInit {
  @Input() disease: IDisease;
  diseases: IDisease[] = DISEASES;
  name:string;
  type:string;
  smalldescription:string;
  
  constructor(private diseaseservice: DiseaseService) { }
    
  
  saveDisease(form) {
    this.disease = this.diseaseservice.getDisease(this.disease.id);
    var i = this.diseases.indexOf(this.disease);
    this.disease = {
      name: form.value.name == undefined ? this.disease.name : form.value.name,
      type: form.value.type == undefined ? this.disease.type : form.value.type,
      smalldescription: form.value.smalldescription == undefined ? this.disease.smalldescription : form.value.smalldescription,
    };
    console.log(form.value);
    this.diseases[i] = this.disease;
  }
  cancelDisease(form){
    this.name = this.disease.name;
    this.type = this.disease.type;
    this.smalldescription = this.disease.smalldescription;
    
  }
  ngOnInit() {
  }

}

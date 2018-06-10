import { Component, OnInit,EventEmitter ,Input ,Output} from '@angular/core';
import { IDisease } from 'src/app/shared/interfaces/IDisease';
import { DiseaseService } from 'src/app/shared/services/diseaseservice/disease.service';

@Component({
  selector: 'app-disease-oneitem',
  templateUrl: './disease-oneitem.component.html',
  styleUrls: ['./disease-oneitem.component.css']
})
export class DiseaseOneitemComponent implements OnInit {
  @Input() disease: IDisease;
  @Output() editClicked= new EventEmitter<number>();
  
  constructor(private diseaseservice: DiseaseService) { }
  editDisease(id){
    this.editClicked.emit(id);
  }
  
  deleteDisease(id) {
    this.diseaseservice.deleteDisease(id);
  }

  ngOnInit() {
  }

}

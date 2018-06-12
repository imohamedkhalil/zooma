import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MedicineService } from 'src/app/shared/services/medicineservice/medicine.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/shared/interfaces/medicine';
import { MEDICINES } from '../../../../shared/services/medicineservice/mock-medicines';

@Component({
  selector: 'app-medicine-oneitem',
  templateUrl: './medicine-oneitem.component.html',
  styleUrls: ['./medicine-oneitem.component.css']
})
export class MedicineOneitemComponent implements OnInit {

  @Input() data: string;  
  @Input() medicine: Medicine;
  @Output() editClicked = new EventEmitter<number>();

  public deleteMedicine(id){
    this.medicineService.deleteMedicine(id);
  }

  public editMedicine(id){
    this.editClicked.emit(id);
  }

  constructor(
    private medicineService: MedicineService,
  ) { }

  ngOnInit() {
  }

}

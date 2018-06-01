import { Component, OnInit } from '@angular/core';
import {Medicine} from './../../../../shared/interfaces/medicine';
import { MEDICINES } from "./../../../../shared/services/medicineservice/mock-medicines";
import { MedicineService } from './../../../../shared/services/medicineservice/medicine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-listing',
  templateUrl: './medicine-listing.component.html',
  styleUrls: ['./medicine-listing.component.css']
})
export class MedicineListingComponent implements OnInit {

  medicines: Medicine[];
  medicine: Medicine;
 
  getMedicines(): void{
    this.medicines = this.medicineService.getMedicines();
  }

  public deleteMedicine(id){
    this.medicineService.deleteMedicine(id);
  }

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMedicines();
  } 
}

import { Component, OnInit } from '@angular/core';
import {Medicine} from './../../../../shared/interfaces/medicine';
import { MEDICINES } from "./../../../../shared/services/medicineservice/mock-medicines";
import { MedicineService } from './../../../../shared/services/medicineservice/medicine.service';

@Component({
  selector: 'app-medicine-listing',
  templateUrl: './medicine-listing.component.html',
  styleUrls: ['./medicine-listing.component.css']
})
export class MedicineListingComponent implements OnInit {

  medicines: Medicine[];

  getMedicines(): void{
    this.medicines = this.medicineService.getMedicines();
  }
  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
    this.getMedicines();
  }
}

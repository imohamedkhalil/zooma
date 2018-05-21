import { Component, OnInit } from '@angular/core';
import {Medicine} from './../../medicine';
import { MEDICINES } from "./../../mock-medicines";
import { MedicineService } from '../../medicine.service';

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

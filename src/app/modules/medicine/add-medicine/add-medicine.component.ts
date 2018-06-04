import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../../shared/interfaces/medicine';
import { MedicineService } from '../../../shared/services/medicineservice/medicine.service';
import { MEDICINES } from '../../../shared/services/medicineservice/mock-medicines';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicines: Medicine[] = MEDICINES;

  addMedicine(form) {
    this.medicineService.addMedicine(form);
  }

  constructor(
    private medicineService: MedicineService
  ) { }

  ngOnInit() {
  }
}

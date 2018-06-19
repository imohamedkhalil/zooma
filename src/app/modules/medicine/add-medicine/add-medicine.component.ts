import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../../shared/interfaces/medicine';
import { MedicineService } from '../../../shared/services/medicineservice/medicine.service';
import { MEDICINES } from '../../../shared/services/medicineservice/mock-medicines';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicines: Medicine[] = MEDICINES;

  addMedicine(form) {

    let medicine: Medicine;
    medicine = form.value;
    this.medicines.push(medicine);
    this.router.navigate(['/medicine']);
  }
 constructor(private router: Router) { }

  ngOnInit() {
  }
}

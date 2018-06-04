import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/shared/interfaces/medicine';
import { MedicineService } from 'src/app/shared/services/medicineservice/medicine.service';

@Component({
  selector: 'app-medicine-listing',
  templateUrl: './medicine-listing.component.html',
  styleUrls: ['./medicine-listing.component.css']
})
export class MedicineListingComponent implements OnInit {

  medicines: Medicine[];
  medicine: Medicine;
 
  getMedicines() {
    this.medicines = this.medicineService.getMedicines();
  }

  getMedicine(id){
    this.medicine = this.medicineService.getMedicine(id);
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

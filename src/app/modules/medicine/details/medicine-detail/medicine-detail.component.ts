import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../../shared/services/medicineservice/medicine.service';
import { Medicine } from '../../../../shared/interfaces/medicine';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  medicine: Medicine;

  getMedicine(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicine = this.medicineService.getMedicine(id);
  }
  
  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMedicine();
  }
}

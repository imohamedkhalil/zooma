import { Component, OnInit } from '@angular/core';
import { MedicineService } from './../../../../shared/services/medicineservice/medicine.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
  }

}

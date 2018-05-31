import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../../shared/interfaces/medicine';
import { MedicineService } from '../../../shared/services/medicineservice/medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MEDICINES } from '../../../shared/services/medicineservice/mock-medicines';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {

  medicine: Medicine;
  medicines: Medicine[] = MEDICINES;

  getMedicine(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicine = this.medicineService.getMedicine(id);
  }

  saveMedicine(form){
    var medicine: Medicine;
    medicine = form.value;
    this.router.navigate(['/medicine']);  
  }
  
  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMedicine();
  }
}

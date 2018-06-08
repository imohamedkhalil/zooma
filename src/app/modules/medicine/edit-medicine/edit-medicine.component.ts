import { Component, OnInit, Input } from '@angular/core';
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

  @Input() medicine: Medicine;
  medicines: Medicine[] = MEDICINES;
  
  getMedicine(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicine = this.medicineService.getMedicine(id);
  }
  
  saveMedicine(form){
    this.medicine = this.medicineService.getMedicine(this.medicine.id);
    var i=this.medicines.indexOf(this.medicine);
    this.medicine ={
      name : form.value.name == undefined ? this.medicine.name :form.value.name,
      type : form.value.type == undefined ? this.medicine.type :form.value.type,
      smalldescription : form.value.smalldescription == undefined ? this.medicine.smalldescription :form.value.smalldescription,
    }
    console.log(form.value);
    this.medicines[i]=this.medicine;
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

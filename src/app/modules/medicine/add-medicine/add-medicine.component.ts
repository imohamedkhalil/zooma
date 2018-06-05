import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { Medicine } from '../../../shared/interfaces/medicine';
import { MedicineService } from '../../../shared/services/medicineservice/medicine.service';
import { MEDICINES } from '../../../shared/services/medicineservice/mock-medicines';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicines: Medicine[] = MEDICINES;
  modalRef: BsModalRef;

  onSubmit(form) {
    this.medicineService.addMedicine(form);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(
    private medicineService: MedicineService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }
}

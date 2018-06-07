import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { ANIMALS } from 'src/app/shared/services/animalservice/mock-animals';
import { Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
 

  onSubmit(form) {
    this.animalService.addAnimal(form);
  }
  constructor(
    private animalService: AnimalService,
    private modalRef: BsModalService
  ) { }

  ngOnInit() {
  }
}

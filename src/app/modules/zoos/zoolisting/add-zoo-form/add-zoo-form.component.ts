import { Component, OnInit } from '@angular/core';
import { IZooSmallComponent } from 'src/app/shared/interfaces/zoointerface/zoointerface';
import { ZooserviceService } from 'src/app/shared/services/zooservice/zooservice.service';
import { Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

@Component({
  selector: 'app-add-zoo-form',
  templateUrl: './add-zoo-form.component.html',
  styleUrls: ['./add-zoo-form.component.css']
})
export class AddZooFormComponent implements OnInit {

  addZoo(form){
    this.zooservice.addZoo(form);
  }
  
  constructor(private zooservice: ZooserviceService, private router: Router , private modalRef: BsModalService) { }

  ngOnInit() {
  }

}

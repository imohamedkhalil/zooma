import { Component, OnInit ,Input, Output} from '@angular/core';
import {IAnimal} from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-small-component',
  templateUrl: './one-small.component.html',
  styleUrls: ['./one-small.component.css']
})
export class OneSmallComponent implements OnInit {
  
  animals: IAnimal [];
  @Input() animal: IAnimal;
  @Output() id= new EventEmitter<number>();
  
  constructor(private animalService: AnimalService, private router:Router) { }
 
  public deleteAnimal(id){
    this.animalService.deleteAnimal(id); 
  }
  public edit(id){
    this.id.emit(id);
  }

  ngOnInit() {  
  }

}

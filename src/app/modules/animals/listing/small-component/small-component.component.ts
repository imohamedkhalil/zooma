import { Component, OnInit,Input } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { AnimalService } from 'src/app/shared/services/animalservice/animal.service';

@Component({
  selector: 'app-small-component',
  templateUrl: './small-component.component.html',
  styleUrls: ['./small-component.component.css']
})
export class SmallComponentComponent implements OnInit {
  constructor(private animalService: AnimalService) { }
  animal:  IAnimal;
  animals: IAnimal[]= this.animalService.animals;
  @Input() data:string;
 
  editform(id:number){
  this.animal = this.animalService.getAnimal(id);
  }
  ngOnInit() {

  }

}

import { Component, OnInit,Input } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-animaladdpredator',
  templateUrl: './animaladdpredator.component.html',
  styleUrls: ['./animaladdpredator.component.css']
})
export class AnimaladdpredatorComponent implements OnInit {
  @Input() predator:IAnimal[];
  form:NgForm;
  constructor() { }
  addPredator(form){
    let name:string = form.controls['name'].value;
  console.log(name);
  }
  ngOnInit() {
  }

}

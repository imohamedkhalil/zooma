import { Component, OnInit,Input } from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';

@Component({
  selector: 'app-animaladdpredator',
  templateUrl: './animaladdpredator.component.html',
  styleUrls: ['./animaladdpredator.component.css']
})
export class AnimaladdpredatorComponent implements OnInit {
  @Input() predator:IAnimal[];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit ,Input} from '@angular/core';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';

@Component({
  selector: 'app-animaladdthreaten',
  templateUrl: './animaladdthreaten.component.html',
  styleUrls: ['./animaladdthreaten.component.css']
})
export class AnimaladdthreatenComponent implements OnInit {
@Input() threaten:IAnimal[];
  constructor() { }

  ngOnInit() {
  }

}

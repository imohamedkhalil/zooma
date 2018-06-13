import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-slider-oneitem',
  templateUrl: './slider-oneitem.component.html',
  styleUrls: ['./slider-oneitem.component.css']
})
export class SliderOneitemComponent implements OnInit {
@Input() image:string;
  constructor() { }

  ngOnInit() {
  }

}

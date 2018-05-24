import { Component, OnInit,Input } from '@angular/core';
import { IShow } from 'src/app/shared/interfaces/IShowHomePage';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
@Input() show:IShow;

  constructor() { }

  ngOnInit() {
    console.log(this.show);
  }

}

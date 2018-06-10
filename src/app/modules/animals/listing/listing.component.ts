import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  filterdata:string;
  constructor() { }

  ngOnInit() {
  }
  filterData(data:string){
    this.filterdata=data;
    console.log(this.filterdata);
    }
}

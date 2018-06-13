import { Component, OnInit } from '@angular/core';
import { IMap } from 'src/app/shared/interfaces/IMap';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 markers:IMap[];
  // google maps zoom level
 zoom: number = 8;
 
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;

 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`);
 }
 
 mapClicked($event: MouseEvent) {
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
     draggable: true
   });
 }
 
 markerDragEnd(m: IMap, $event: MouseEvent) {
   console.log('dragEnd', m, $event);
 }
 
  constructor() { }

  ngOnInit() {
  }

}

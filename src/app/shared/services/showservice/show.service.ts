import { Injectable } from '@angular/core';
import { IShow } from "../../interfaces/IShowHomePage";
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  shows: IShow[] = [
    {
      imgUrl: "",
      time: 15,
      location: "",
      title: "",
      description: ""
    },
    {
      imgUrl: "",
      time: 15,
      location: "",
      title: "",
      description: ""
    },
    {
      imgUrl: "",
      time: 15,
      location: "",
      title: "",
      description: ""
    },
    {
      imgUrl: "",
      time: 15,
      location: "",
      title: "",
      description: ""
    },
    {
      imgUrl: "",
      time: 15,
      location: "",
      title: "",
      description: ""
    }
  ];
  constructor() { }

  public getShows(): IShow[] {
    return this.shows;
  }
}

import { Injectable } from '@angular/core';
import { IShow } from "../../interfaces/IShowHomePage";
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  shows: IShow[] = [
    {
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Cairo-Egypt",
      title: "Geza Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions "
    },
    {
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Egypt",
      title: "Africano Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },
    {
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Cairo-Egypt",
      title: "Africano Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },{
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Cairo-Egypt",
      title: "Africano Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },
  ];
  constructor() { }

  public getShows(): IShow[] {
    return this.shows;
  }
}

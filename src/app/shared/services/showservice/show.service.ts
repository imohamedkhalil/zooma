import { Injectable } from '@angular/core';
import { IShow } from "../../interfaces/IShowHomePage";
@Injectable({
  providedIn: 'root'
})
export class ShowService {
  shows: IShow[] = [
    {
      id:1,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Cairo-Egypt",
      title: "Geza Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions "
    },
    {
      id:2,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "6:00 pm",
      location: "Egypt",
      title: "Africano Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },
    {
      id:3,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "7:00 pm",
      location: "Cairo-Egypt",
      title: "Zozo Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },{
      id:4,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "8:00 pm",
      location: "Cairo-Egypt",
      title: "TOTo ZOo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },
  ];
  topshows: IShow[] = [
    {
      id:1000,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "5:00 pm",
      location: "Cairo-Egypt",
      title: "Geza Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions "
    },
    {
      id:1001,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "6:00 pm",
      location: "Egypt",
      title: "Africano Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    },
    {
      id:1002,
      imgUrl: "../../../../assets/img/3.jpg",
      time: "7:00 pm",
      location: "Cairo-Egypt",
      title: "Zozo Zoo",
      description: "The biggest zoo in egypt has alot of animals like lions"
    }
  ];
  constructor() { }

  public getShows() {
    return this.shows;
  }
  public getTopShows() {
    return this.shows;
  }
}

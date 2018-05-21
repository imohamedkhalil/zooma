import { Injectable } from '@angular/core';
import { IZooSmallComponent } from '../interfaces/zoointerface'

@Injectable({
  providedIn: 'root'
})
export class ZooserviceService {
  zoos: IZooSmallComponent[] = [
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "LosAngeles",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["lion","Girrafes"]
    },
    {
      imgUrl: "./assets/image/dd.jpg",
      name: "Gizaa Zoo",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Elephant","Girraffes"]
    },
    {
      imgUrl: "./assets/image/ff.jpg",
      name: "Alex Zoo",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["lion"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "Ismailia ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Monkey"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "Portsaid ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Cheetas"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "Portsaid ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Horses"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "elwadyelgded",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Fishes"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "Cairo ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Tortoise","Lion"]
    },
    {
      imgUrl: "./assets/image/aa.jpg",
      name: "elswees ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:["Cheetas","Fishes"]
    },
   
  ];
  constructor() { }



  getZooSmallComponent(): IZooSmallComponent[] {
    return this.zoos;
  }
}

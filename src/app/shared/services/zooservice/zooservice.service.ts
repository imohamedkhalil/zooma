import { Injectable } from '@angular/core';
import { IZooSmallComponent } from '../../interfaces/zoointerface/zoointerface'

@Injectable({
  providedIn: 'root'
})
export class ZooserviceService {
  zoos: IZooSmallComponent[] = [
    {
      id:1,
      imgUrl: "./assets/image/aa.jpg",
      name: "LosAngeles",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Giraffes"
    },
    {
      id:2,
      imgUrl: "./assets/image/dd.jpg",
      name: "Gizaa Zoo",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Elephants"
    },
    {
      id:3,
      imgUrl: "./assets/image/ff.jpg",
      name: "Alex Zoo",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Lions"
    },
    {
      id:4,
      imgUrl: "./assets/image/aa.jpg",
      name: "Ismailia ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Monkey"
    },
    {
      id:5,
      imgUrl: "./assets/image/aa.jpg",
      name: "Portsaid ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Cheetas"
    },
    {
      id:6,
      imgUrl: "./assets/image/aa.jpg",
      name: "Portsaid ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Zebras"
    },
    {
      id:7,
      imgUrl: "./assets/image/aa.jpg",
      name: "elwadyelgded",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Horses"
    },
    {
      id:8,
      imgUrl: "./assets/image/aa.jpg",
      name: "Cairo ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Fishes"
    },
    {
      id:8,
      imgUrl: "./assets/image/aa.jpg",
      name: "elswees ",
      address: "Porto Blvd, Suite 100 Los Angeles/CA",
      phone: 12345678910,
      email: "Zooo@mail.com",
      addressUrl: "(view directions)",
      locImg: "./assets/image/pin.png",
      animals:"Tortoise"
    },
   
  ];
  constructor() { }



  getZooSmallComponent(): IZooSmallComponent[] {
    return this.zoos;
  }

  getzoo(id){
    return this.zoos.find(zoo => zoo.id == id);
  }

 deletezoo(id){
    var zoo = this.zoos.map(function(item) { return item.id; }).indexOf(id);
    this.zoos.splice(zoo, 1);
  }
}

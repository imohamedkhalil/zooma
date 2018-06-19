import { NEWS } from './mock-news';
import { Injectable } from '@angular/core';
import {INews} from './../../interfaces/iNews';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
 News: INews[] = [
    { id : 1,
        image: '../../../../assets/img/news.jpg',
        title: 'Our first news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20',
        
    },
    { id : 2,
        image: '../../../../assets/img/news.jpg',
        title: 'Our second news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20',
       
    },
    { id : 3,
        image: '../../../../assets/img/news.jpg',
        title: 'Our third news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20',
        
    },

    { id : 4,
        image: '../../../../assets/img/news.jpg',
        title: 'Our fourth news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20'
    },
    { id : 5,
        image: '../../../../assets/img/news.jpg',
        title: 'Our fifth news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20',
    },
    { id : 6,
        image: '../../../../assets/img/news.jpg',
        title: 'Our first news',
        description: `Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula
        . Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor
         tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl,
          eu ornare mauris tincidunt vitae. [...]`,
        bySomeone: 'by admin',
        date: '20'

    },

];
  constructor() { }

  public getNews() {
    return NEWS;
  }

  public getNew(id: number) {
    // tslint:disable-next-line:triple-equals
    return NEWS.find(news => news.id == id);
}
public deleteNews(id) {

  const New = NEWS.map(function(item) { return item.id; }).indexOf(id);
  NEWS.splice(New, 1);

}
public addNew(form) {
  // tslint:disable-next-line:no-var-keyword
  var news: INews;
  news = form.value;
  NEWS.push(news);
}
}


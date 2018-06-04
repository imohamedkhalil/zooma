import { ANIMALS } from './mock-animals';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';

export class AnimalService {
    animal: IAnimal;
    animals:IAnimal []= [
        { id: 1, name: 'Cat', category: 'Mamels', contienent: 'Asia', type: 'cat', lifeSpan: 10, date: 'Month', description: 'mjhghghgv', image: '../assets/slides/cat.jpg' },
        { id: 2, name: 'Dog', category: 'Mamels', contienent: 'Africa', type: 'dog', lifeSpan: 25, date: 'Year', description: 'mjhghghgv', image: '../assets/slides/d.jpg' },
        { id: 3, name: 'Dog', category: 'Mamels', contienent: 'Europe', type: 'bird', lifeSpan: 8, date: 'Year', description: 'mjhghghgv', image: '../assets/slides/d2.jpg' },
        { id: 4, name: 'Horse', category: 'Amphibians', contienent: 'Asia', type: 'cat', lifeSpan: 5, date: 'Month', description: 'mjhghghgv', image: '../assets/slides/horse.jpg' },
        { id: 5, name: 'Bird', category: 'Bird', contienent: 'Africa', type: 'dog', lifeSpan: 1, date: 'Year', description: 'mjhghghgv', image: '../assets/slides/20.jpg' },
        { id: 6, name: 'Fish', category: 'Fish', contienent: 'Europe', type: 'bird', lifeSpan: 20, date: 'Month', description: 'mjhghghgv', image: '../assets/slides/Fishes.png' },
    ];
    public getAnimals() {
        return this.animals;
    }
     public getAnimal(id: number) {
    return this.animals.find(animal => animal.id === id);
    }
    public deleteAnimal(id){
        let animal = this.animals.map(function(item) { return item.id; }).indexOf(id);
        this.animals.splice(animal, 1);
    }
   
}

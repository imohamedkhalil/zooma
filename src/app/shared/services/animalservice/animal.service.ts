import { ANIMALS } from './mock-animals';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';
export class AnimalService {
    animal: IAnimal;
    animals: IAnimal[] = [
        {
            id: 1,
            name: 'Shirazi',
            category: 'Mamels',
            contienent: 'Asia',
            type: 'cat',
            lifeSpan: 10,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image:['../assets/slides/28.jpg', '../assets/slides/cat.jpg']
        },
        {
            id: 2,
            name: 'Haski',
            category: 'Mamels',
            contienent: 'Africa',
            type: 'dog',
            lifeSpan: 25,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image:[ '../assets/slides/d.jpg','../assets/slides/d2.jpg']
        },
        {
            id: 3,
            name: 'chihuahuah',
            category: 'Mamels',
            contienent: 'Europe',
            type: 'dog',
            lifeSpan: 8,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image:['../assets/slides/d2.jpg','../assets/slides/d.jpg'] 
        },
        {
            id: 4,
            name: 'Brumby',
            category: 'Amphibians',
            contienent: 'Asia',
            type: 'horse',
            lifeSpan: 5,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image:['../assets/slides/horse.jpg','../assets/slides/horse.jpg']
        },
        {
            id: 5,
            name: 'Bird',
            category: 'Bird',
            contienent: 'Africa',
            type: 'bird',
            lifeSpan: 1,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/20.jpg']
        },
        {
            id: 6,
            name: 'siamcese',
            category: 'Mamels',
            contienent: 'Europe',
            type: 'cat',
            lifeSpan: 8,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/cat.jpg','../assets/slides/29.jpg']
        },
        {
            id: 7,
            name: 'Fish',
            category: 'Fish',
            contienent: 'Europe',
            type: 'bird',
            lifeSpan: 20,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/Fishes.png']
        }
    ];
    public getAnimals() {
        return this.animals;
    }
    public getAnimal(id: number) {
        return this.animals.find(animal => animal.id === id);
    }
    public addAnimal(form) {
        console.log(form.value); 

        let animal: IAnimal;
        animal = form.value;
        animal.image=['../assets/slides/d2.jpg'];
        console.log(animal);
        this.animals.push(animal);
    }
    public deleteAnimal(id) {
        let animal = this.animals.map(function (item) { return item.id; }).indexOf(id);
        this.animals.splice(animal, 1);
    }

}

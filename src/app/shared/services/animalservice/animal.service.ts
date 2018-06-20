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
            description: 'The Persian cat was first presented at the worlds first organised cat show in 1871 in London, England, before making its way to the United States of America in the early 1900s. The Persian cat breeding standards have always called for a cat with a short face, but its important to note that the Persian cat originally had a much longer nose than the flat-faced Persians of today. Hereditary polycystic kidney disease is prevalent in the breed, affecting almost half the population in some countries',
            image: ['../assets/slides/28.jpg', '../assets/slides/cat.jpg']
        },
        {
            id: 2,
            name: 'Haski',
            category: 'Mamels',
            contienent: 'Africa',
            type: 'dog',
            lifeSpan: 25,
            date: 'Year',
            description: 'The Siberian Husky is a beautiful dog breed with a thick coat that comes in a multitude of colors and markings. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia. It is easy to see why many are drawn to the Siberian’s wolf-like looks, but be aware that this athletic, intelligent dog can be independent and challenging for first-time dog owners.',
            image: ['../assets/slides/husky1.jpg', '../assets/slides/husky.jpg']
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
            image: ['../assets/slides/d2.jpg', '../assets/slides/d.jpg']
        },
        {
            id: 4,
            name: 'Brumby',
            category: 'Amphibians',
            contienent: 'Australia',
            type: 'horse',
            lifeSpan: 5,
            date: 'Month',
            description: 'A Brumby is a free-roaming feral horse in Australia. Although found in many areas around the country, the best-known Brumbies are found in the Australian Alps region. Today, most of them are found in the Northern Territory, with the second largest population in Queensland. A group of Brumbies is known as a "mob" or "band".',
            image: ['../assets/slides/horse.jpg', '../assets/slides/27.jpg']
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
            name: 'chihuahuah',
            category: 'Mamels',
            contienent: 'Europe',
            type: 'dog',
            lifeSpan: 8,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/d2.jpg', '../assets/slides/d.jpg']
        },,
        {
            id: 7,
            name: 'siamcese',
            category: 'Mamels',
            contienent: 'Europe',
            type: 'cat',
            lifeSpan: 8,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/cat.jpg', '../assets/slides/29.jpg']
        },
        {
            id:8,
            name: 'Fish',
            category: 'Fish',
            contienent: 'Europe',
            type: 'fish',
            lifeSpan: 20,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/Fishes.png', '../assets/slides/Fishes.png']
        }
    ];
    predators: IAnimal[] = [
        {
            id: 1,
            name: 'Shirazi',
            category: 'Mamels',
            contienent: 'Asia',
            type: 'cat',
            lifeSpan: 10,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/28.jpg', '../assets/slides/cat.jpg']
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
            image: ['../assets/slides/d.jpg', '../assets/slides/d2.jpg']
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
            image: ['../assets/slides/d2.jpg', '../assets/slides/d.jpg']
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
            image: ['../assets/slides/horse.jpg', '../assets/slides/horse.jpg']
        }
    ];
    threatens: IAnimal[] = [
        {
            id: 1,
            name: 'Brumby',
            category: 'Amphibians',
            contienent: 'Asia',
            type: 'horse',
            lifeSpan: 5,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/horse.jpg', '../assets/slides/horse.jpg']
        },
        {
            id: 2,
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
            id: 3,
            name: 'siamcese',
            category: 'Mamels',
            contienent: 'Europe',
            type: 'cat',
            lifeSpan: 8,
            date: 'Year',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/cat.jpg', '../assets/slides/29.jpg']
        },
        {
            id: 4,
            name: 'Fish',
            category: 'Fish',
            contienent: 'Europe',
            type: 'fish',
            lifeSpan: 20,
            date: 'Month',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: ['../assets/slides/Fishes.png', '../assets/slides/Fishes.png']
        }
    ];


    public getPredators() {
        return this.predators;
    }
    public getPredator(id: number) {
        return this.predators.find(predator => predator.id === id);
    }
    public addPredator(form) {
        let Predator: IAnimal;
        Predator = form.value;
        Predator.image = ['../assets/slides/Fishes.png'];
        this.predators.push(Predator);
    }
    public deletePredator(id) {
        let predator = this.predators.map(function (item) { return item.id; }).indexOf(id);
        this.predators.splice(predator, 1);
    }


    public getThreatens() {
        return this.threatens;
    }
    public getThreaten(id: number) {
        return this.threatens.find(threaten => threaten.id === id);
    }
    public addThreaten(form) {
        let threaten: IAnimal;
        threaten = form.value;
        threaten.image = ['../assets/slides/Fishes.png'];
        this.threatens.push(threaten);
    }
    public deleteThreaten(id) {
        let threaten = this.threatens.map(function (item) { return item.id; }).indexOf(id);
        this.threatens.splice(threaten, 1);
    }


    public getAnimals() {
        return this.animals;
    }
    public getAnimal(id: number) {
        return this.animals.find(animal => animal.id === id);
    }
    public addAnimal(form) {
        let animal: IAnimal;
        animal = form.value;
        animal.image = ['../assets/slides/Fishes.png'];
        this.animals.push(animal);
    }
    public deleteAnimal(id) {
        let animal = this.animals.map(function (item) { return item.id; }).indexOf(id);
        this.animals.splice(animal, 1);
    }

}

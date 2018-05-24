import { ANIMALS } from './mock-animals';
import { IAnimal } from 'src/app/shared/interfaces/IAnimal';

export class AnimalService {
    animal: IAnimal;
    public getAnimals() {
        return ANIMALS;
    }
     public getAnimal(id: number) {
    return ANIMALS.find(animal => animal.id === id);
    }
}

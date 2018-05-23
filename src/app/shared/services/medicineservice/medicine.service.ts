import { Medicine } from "./../../interfaces/medicine";
import { MEDICINES } from "./mock-medicines";

export class MedicineService{
    
    public getMedicines() {
        return MEDICINES;
      }

    public getMedicine(id: number){
        return MEDICINES.find(medicine => medicine.id == id);
    }  
}
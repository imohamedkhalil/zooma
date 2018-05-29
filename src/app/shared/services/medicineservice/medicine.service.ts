import { Medicine } from "./../../interfaces/medicine";
import { MEDICINES } from "./mock-medicines";

export class MedicineService{
    
    public getMedicines() {
        return MEDICINES;
      }

    public getMedicine(id: number){
        return MEDICINES.find(medicine => medicine.id == id);
    }  

    public deleteZoo(id){
        var medicine = MEDICINES.map(function(item) { return item.id; }).indexOf(id);
        MEDICINES.splice(medicine, 1);
    }
}
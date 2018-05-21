import { Medicine } from "./medicine";
import { MEDICINES } from "./mock-medicines";

export class MedicineService{
    public getMedicines() {
        return MEDICINES;
      }
}
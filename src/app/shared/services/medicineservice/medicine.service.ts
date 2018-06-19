import { Medicine } from "./../../interfaces/medicine";
import { MEDICINES } from "./mock-medicines";

export class MedicineService {

    public getMedicines() {
        return MEDICINES;
    }

    public getMedicine(id) {
        return MEDICINES.find(medicine => medicine.id == id);
    }

    public addMedicine(form) {
        var medicine: Medicine;
        medicine = form.value;
        console.log(medicine);
        MEDICINES.push(medicine);
    }

    public deleteMedicine(id) {
        var medicine = MEDICINES.map(function (item) { return item.id; }).indexOf(id);
        MEDICINES.splice(medicine, 1);
    }
}
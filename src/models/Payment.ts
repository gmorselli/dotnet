export class Payment {

    id: number;
    quantity: number;
    id_stop: number;
    username: string;   
    id_slot: number;
    id_car: number;
    timeToAdd: number;

    constructor(id: number, quantity: number, id_stop: number, username: string, id_slot: number, id_car: number, timeToAdd: number) {
        this.id = id;
        this.quantity = quantity;
        this.id_stop = id_stop;
        this.username = username;
        this.id_slot = id_slot;
        this.id_car = id_car;
        this.timeToAdd = timeToAdd;
    }
}

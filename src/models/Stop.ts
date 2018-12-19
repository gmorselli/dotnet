

export class Stop {
    
id_stop: number;
    start: Date;
    finish: Date;
    name: string;
    price: number;
    license_plate: string;
    id_car: number;
    id_slot: number;

    constructor(id_stop: number, start: Date, finish: Date, name:string, price: number, license_plate: string, id_car: number, id_slot: number){
            this.id_stop = id_stop;
            this.start = start;
            this.finish = finish;
            this.name = name;
            this.name = name;
            this.price = price;
            this.license_plate = license_plate;
            this.id_car = id_car;
            this.id_slot = id_slot;

    }
}
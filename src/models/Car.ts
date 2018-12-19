export class Car{
    id: number;
    license_plate: string;
    name: string;
    username: string;

    constructor(id: number, license_plate: string, name: string, username: string){
        this.id = id;
        this.license_plate = license_plate;
        this.name = name;
        this.username = username;
    }
    
}
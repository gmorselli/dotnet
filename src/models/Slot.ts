
export class Slot
{
    id: number; 
    number_carplace: number;  
    number_carplace_free: number; 
    latitude: number;  
    longitude: number; 
    address: string;  
    price: number;  
    type: number;  
    username: string;  
    
    constructor(id: number, number_carplace: number, number_carplace_free: number, latitude: number, longitude: number, address: string, price: number, type: number, username: string)
    {
        this.id = id;
        this.number_carplace = number_carplace;
        this.number_carplace_free = number_carplace_free;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.price = price;
        this.type = type;
        this.username = username;
    }
}
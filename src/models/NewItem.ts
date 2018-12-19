import { ItemType } from "./ItemType";
import { Room } from "./Room";
import { Customer } from "./Customer";

export class NewItem {

    id: number;
    room: Room;
    itemType: ItemType;
    manufacturer: Customer;

    constructor(id: number, room: Room, itemType: ItemType, manufacturer: Customer) {
        this.id = id;
        this.room = room;
        this.itemType = itemType;
        this.manufacturer=manufacturer;
    }
}
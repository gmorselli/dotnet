import { ItemType } from "./ItemType";
import { Room } from "./Room";

export class BasicItem {

    id: number;
    room: Room;
    itemType: ItemType;

    constructor(id: number, room: Room, itemType: ItemType) {
        //console.log("sto costruendo un Basic item");
        this.id = id;
        //console.log("il suo id è "+this.id);
        this.room = room;
        //console.log("la sua room è "+this.room.nomeRoom+" "+this.room.descrizione);
        this.itemType = itemType;
        //console.log("il suo itemType è "+this.itemType.categoria+" "+this.itemType.descrizione+" "+this.itemType.marca+" "+this.itemType.modello);
    }
}
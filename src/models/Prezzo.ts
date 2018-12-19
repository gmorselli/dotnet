import { ItemType } from "./ItemType";
import { Listino } from "./Listino";

export class Prezzo{
    id:number
    prezzo:number
    itemType: ItemType
    listino: Listino
    
        constructor( id:number, prezzo:number, itemTypeId: ItemType, idListino: Listino ){
          this.id=id;
          this.prezzo=prezzo;
          this.itemType=itemTypeId;
          this.listino=idListino;
           
        }
    }
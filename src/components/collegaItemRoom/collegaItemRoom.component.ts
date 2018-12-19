import { BasicItem } from './../../models/BasicItem';
import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { ItemService } from "src/services/item.service";
import { ItemType } from "src/models/ItemType";
import { RoomService } from 'src/services/room.service';
import { Room } from 'src/models/Room';
import { Floor } from 'src/models/Floor';



@Component({
    selector: 'app-collegaItemRoom',
    templateUrl: './collegaItemRoom.component.html',
    styleUrls: ['./collegaItemRoom.component.css']

})
export class CollegaItemRoom{
    
    private roomId: string;
    private room: Room;

    private available : Array<ItemType>;
    private myItems : Array<BasicItem>;

    private removedIds : Array<number>;

    constructor(private roomService: RoomService, private itemService: ItemService, private itemTypeService: ItemtypeService, private route: ActivatedRoute, private router : Router){}
    
    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('roomId');   
        this.roomService.findById(this.roomId).subscribe((response)=>{this.room = response});    
        console.log("gestione Items da room");   
        this.itemTypeService.MyitemTypeList().subscribe((response)=>{ this.available = response});
        this.itemService.findByRoom(this.roomId).subscribe((response)=> {this.myItems = response});
        this.removedIds = new Array();

    }

    add(itemType: ItemType){
        let newItem : BasicItem = new BasicItem(-1, this.room, itemType);
        this.myItems.push(newItem);
        console.log("ADDED: "+itemType.categoria+" "+itemType.descrizione+" "+itemType.marca+" "+itemType.modello);
    }

    remove(item: BasicItem){

        let myNewItems : Array<BasicItem>;
        myNewItems = new Array();
        let alreadyFound : boolean;
        alreadyFound = false;
        this.myItems.forEach(myItem => {
            if (!alreadyFound && item.id != myItem.id) {
                myNewItems.push(myItem);
               
            } else if (alreadyFound){
                myNewItems.push(myItem);
            }  else {
                alreadyFound = true;
                this.removedIds.push(myItem.id);
            }
        });

        this.myItems = myNewItems;
        console.log("REMOVED: "+item.itemType.categoria+" "+item.itemType.descrizione+" "+item.itemType.marca+" "+item.itemType.modello)
    }
    
    saveChanges(){
        console.log("QUI DOVREI SALVARE (IL MONDO) ");
        let myNewItems : Array<BasicItem>;
        myNewItems = new Array();
        this.myItems.forEach(item => {
            if (item.id == -1)
            this.itemService.save(item).subscribe((response)=> {item = response});
            myNewItems.push(item);
        });

        this.myItems = myNewItems;
        this.removedIds.forEach(id =>{
            this.itemService.delete(id).subscribe((response)=>{});
        });

        let floor : Floor;
        this.roomService.myFloor(this.roomId).subscribe((response)=> {
            floor = response,
            this.router.navigateByUrl("/gestioneRoom/"+floor.id)
        });
        console.log(floor);
     //   console.log("/gestioneRoom/"+floor.id);
       ;


    }



}



import { Component, OnInit } from "@angular/core";
import { Floor } from "src/models/Floor";
import { FloorService } from "src/services/floor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Room } from "src/models/Room";
import { RoomService } from "src/services/room.service";

@Component({
    selector: 'app-deleteRoom',
    templateUrl: './deleteRoom.component.html',
    styleUrls: ['./deleteRoom.component.css']

})

export class DeleteRoomComponent implements OnInit{

    floorId: string;
    rooms: Array<Room>;
   
    constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.floorId = this.route.snapshot.paramMap.get('floorId');
        console.log("delete Room!");
        this.roomService.roomsByFloor(this.floorId).subscribe((response)=>{ this.rooms = response});   
    }

    delete(f:NgForm){

        this.roomService.delete(f.value.id).subscribe((Response) => {


            if(Response != null){
                this.router.navigateByUrl("/gestioneRoom/"+this.floorId);
            } else{
                console.log("response è null in delete room");
            }
        })


       
    }


    

}
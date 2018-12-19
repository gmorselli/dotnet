import { RoomService } from './../../services/room.service';
import { FloorService } from "src/services/floor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OnInit, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Floor } from "src/models/Floor";
import { Room } from 'src/models/Room';


@Component({
    selector: 'app-updateRoom',
    templateUrl: './updateRoom.component.html',
    styleUrls: ['./updateRoom.component.css']

})

export class UpdateRoomComponent implements OnInit{

    floorId: string;
    rooms: Array<Room>;
   
    constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.floorId = this.route.snapshot.paramMap.get('floorId');
        this.roomService.roomsByFloor(this.floorId).subscribe((response)=>{ this.rooms = response});  
       
    }

    update(f:NgForm){

        console.log(f.value.id +" "+ f.value.nomeRoom +" "+f.value.descrizione );

        this.roomService.updateRoom(f.value.id, f.value.nomeRoom, f.value.descrizione).subscribe((Response) => {

            

            if(Response != null){
                this.router.navigateByUrl("/gestioneRoom/"+this.floorId);
            } else{
                console.log("response è null in update room");
            }
        })
    }


    

}
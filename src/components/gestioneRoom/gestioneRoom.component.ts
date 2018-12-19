import { OnInit, Component } from "@angular/core";
import { RoomService } from "src/services/room.service";
import { ActivatedRoute, Router } from "@angular/router"; 
import { Room } from "src/models/Room";


@Component({
    selector: 'app-gestioneRoom',
    templateUrl: './gestioneRoom.component.html',
    styleUrls: ['./gestioneRoom.component.css']

})

export class GestioneRoomComponent implements OnInit{

    floorId: string;
    rooms: Array<Room>;

    constructor(private floorService: RoomService, private route: ActivatedRoute, private router: Router){

    }
    
    ngOnInit() {
        this.floorId = this.route.snapshot.paramMap.get('floorId');
        this.floorService.roomsByFloor(this.floorId).subscribe((response)=>{ this.rooms = response});       
        console.log("gestione Rooms!");
    }

    toInsertRoom(floorId: string){
        console.log(floorId);
        this.router.navigateByUrl("/insertRoom/"+floorId);
    }

    toUpdateRoom(floorId: string){
        this.router.navigateByUrl("/updateRoom/"+floorId);
    }

    toDeleteRoom(floorId: string){
        this.router.navigateByUrl("/deleteRoom/"+floorId);
    }

    toRoomConfigurator(roomId: string){
        this.router.navigateByUrl("/configurazioneRoom/"+roomId);
    }


}
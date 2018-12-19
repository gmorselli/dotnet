import { RoomService } from './../../services/room.service';
import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-insertRoom',
    templateUrl: './insertRoom.component.html',
    styleUrls: ['./insertRoom.component.css']

})

export class InsertRoomComponent implements OnInit{

    floorId: string;
   
    constructor(private roomService: RoomService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.floorId = this.route.snapshot.paramMap.get('floorId');
        console.log("insert Room! "+this.floorId);
    }

    register(f:NgForm, floorId:string){
        console.log(f.value.nomeRoom+" "+f.value.descrizione+" "+floorId);
        this.roomService.newRoom(f.value.nomeRoom, f.value.descrizione, floorId).subscribe((Response) => {
           
            if(Response != null){
           this.router.navigateByUrl("/gestioneRoom/"+floorId);
            } else{
                console.log("response è null in insert room");
            }
        })
        
    }


}
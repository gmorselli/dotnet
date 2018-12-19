import { FloorService } from "src/services/floor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OnInit, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Floor } from "src/models/Floor";


@Component({
    selector: 'app-updateFloor',
    templateUrl: './updateFloor.component.html',
    styleUrls: ['./updateFloor.component.css']

})

export class UpdateFloorComponent implements OnInit{

    buildingId: string;
    floors: Array<Floor>;
   
    constructor(private floorService: FloorService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.buildingId = this.route.snapshot.paramMap.get('buildingId');
        this.floorService.floorsByBuilding(this.buildingId).subscribe((response)=>{ this.floors = response});  
       
    }

    update(f:NgForm){

        this.floorService.updateFloor(f.value.id, f.value.nomeFloor, f.value.descrizione).subscribe((Response) => {

            console.log(f.value.id +" "+ f.value.nomeFloor +" "+f.value.descrizione );

            if(Response != null){
                this.router.navigateByUrl("/gestioneFloor/"+this.buildingId);
            } else{
                console.log("response è null in update floor");
            }
        })
    }


    

}
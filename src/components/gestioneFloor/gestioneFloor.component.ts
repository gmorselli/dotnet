import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { FloorService } from "src/services/floor.service";
import { Building } from "src/models/Building";
import { ActivatedRoute, Router } from "@angular/router";
import { Floor } from "src/models/Floor";
import { Z_UNKNOWN } from 'zlib';

@Component({
    selector: 'app-gestioneFloor',
    templateUrl: './gestioneFloor.component.html',
    styleUrls: ['./gestioneFloor.component.css']

})

export class GestioneFloorComponent implements OnInit{

    buildingId: string;
    floors: Array<Floor>;

    constructor(private floorService: FloorService, private route: ActivatedRoute, private router : Router){

    }
    
    ngOnInit() {
        this.buildingId = this.route.snapshot.paramMap.get('buildingId');
        this.floorService.floorsByBuilding(this.buildingId).subscribe((response)=>{ this.floors = response});       
        console.log("gestione Floor!");   
    }

    toInsertFloor(buildingId: string){
        this.router.navigateByUrl("/insertFloor/"+buildingId);
    }

    toUpdateFloor(buildingId: string){
        this.router.navigateByUrl("/updateFloor/"+buildingId);
    }

    toDeleteFloor(buildingId: string){
        this.router.navigateByUrl("/deleteFloor/"+buildingId);
    }

    toRoomMenu(floorid:string){
        this.router.navigateByUrl("/gestioneRoom/"+floorid);
    }

}
import { Component, OnInit } from "@angular/core";
import { BuildingService } from "src/services/building.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Building } from "src/models/Building";

@Component({
    selector:'app-gestioneBuilding',
    templateUrl: './gestioneBuilding.component.html',
    styleUrls: ['./gestioneBuilding.component.css']
})

export class GestioneBuildingComponent implements OnInit{
    public buildings: Array<Building>

    constructor(private buildingService:BuildingService, private router:Router){

    }

    ngOnInit(){
        this.buildingService.findAll().subscribe((response) => {
            this.buildings = response;
            console.log("la size è"+this.buildings.length);
        })
    }

    toFloorMenu(buildingId:string){
        this.router.navigateByUrl("/gestioneFloor/"+buildingId);
    }
}



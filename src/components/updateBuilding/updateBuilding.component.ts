import { Component, OnInit } from "@angular/core";
import { BuildingService } from "src/services/building.service";
import { Router } from "@angular/router";
import { Building } from "src/models/Building";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-updateBuilding',
    templateUrl:'./updateBuilding.component.html',
    styleUrls:['./updateBuilding.component.css']
})

export class UpdateBuildingComponent implements OnInit{
    public buildings: Array<Building>
    public idSelected: string;
    
     
    constructor(private buildingService:BuildingService, private router:Router){

    }

    ngOnInit(){
        this.buildingService.findAll().subscribe((response) => {
            this.buildings = response;
        })
    }

    update(f : NgForm){
        this.buildingService.update(f.value.idselected, f.value.newindirizzo, f.value.newinterno, f.value.newcitta, f.value.newcap).subscribe((response) => {
            this.router.navigateByUrl("/gestioneBuilding");

        })
    }

    
}
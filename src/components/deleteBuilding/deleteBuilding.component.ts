import { Component, OnInit } from "@angular/core";
import { BuildingService } from "src/services/building.service";
import { Router } from "@angular/router";
import { Building } from "src/models/Building";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-deleteBuilding',
    templateUrl:'./deleteBuilding.component.html',
    styleUrls:['./deleteBuilding.component.css']
})

export class DeleteBuildingComponent implements OnInit{
    public buildings: Array<Building>
    constructor(private buildingService:BuildingService, private router:Router){
        
    }

    ngOnInit(){
        this.buildingService.findAll().subscribe((response) => {
            this.buildings = response;
        })
    }

    delete(f:NgForm){
          this.buildingService.delete(f.value.idSelected).subscribe((response)=>{
          if (response != null) {
           this.router.navigateByUrl("/gestioneBuilding");
            }
       });
    }
}
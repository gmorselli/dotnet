import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";
import { BuildingService } from "src/services/building.service";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-insertBuilding',
    templateUrl: './insertBuilding.component.html',
    styleUrls: ['./insertBuilding.component.css']
})

export class InsertBuildingComponent implements OnInit{
    constructor(private buildingService:BuildingService, private router:Router){

    }
    ngOnInit(){
        
    }

    register(f:NgForm){

        var customer = sessionStorage.getItem("user");
        var myCustomer = JSON.parse(customer);
        console.log(myCustomer.username);
        this.buildingService.newBuilding(f.value.indirizzo,f.value.interno,f.value.city, myCustomer.username,f.value.cap).subscribe((Response) => {
            console.log("compareeeee");

            if(Response != null){
                this.router.navigateByUrl("/gestioneBuilding");
            } else{
                console.log("response è null");
            }
        })
    }
}
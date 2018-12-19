import { Component, OnInit } from "@angular/core";
import { Floor } from "src/models/Floor";
import { FloorService } from "src/services/floor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-deleteFloor',
    templateUrl: './deleteFloor.component.html',
    styleUrls: ['./deleteFloor.component.css']

})

export class DeleteFloorComponent implements OnInit{

    buildingId: string;
    floors: Array<Floor>;
   
    constructor(private floorService: FloorService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.buildingId = this.route.snapshot.paramMap.get('buildingId');
        console.log("delete Floor!");
        this.floorService.floorsByBuilding(this.buildingId).subscribe((response)=>{ this.floors = response});   
    }

    delete(f:NgForm){

        this.floorService.delete(f.value.id).subscribe((Response) => {


            if(Response != null){
                this.router.navigateByUrl("/gestioneFloor/"+this.buildingId);
            } else{
                console.log("response è null in delete floor");
            }
        })


       
    }


    

}
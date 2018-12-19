import { FloorService } from './../../services/floor.service';
import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-insertFloor',
    templateUrl: './insertFloor.component.html',
    styleUrls: ['./insertFloor.component.css']

})

export class InsertFloorComponent implements OnInit{

    buildingId: string;
   
    constructor(private floorService: FloorService, private route: ActivatedRoute, private router: Router){
    }
    
    ngOnInit() {
        this.buildingId = this.route.snapshot.paramMap.get('buildingId');
        console.log("insert Floor!");
    }

    register(f:NgForm, buildingId:string){
        console.log("bestemmmia randommmm "+buildingId);
        this.floorService.newFloor(f.value.nomeFloor, f.value.descrizione, buildingId).subscribe((Response) => {
           
            if(Response != null){
                this.router.navigateByUrl("/gestioneFloor/"+buildingId);
            } else{
                console.log("response è null in insert floor");
            }
        })
    }


}
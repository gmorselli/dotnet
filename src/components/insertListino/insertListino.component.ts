import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-insertListino',
    templateUrl:'./insertListino.component.html',
    styleUrls:['./insertListino.component.css']
})

export class InsertListinoComponent implements OnInit{

    constructor(private listinoService:ListinoService, private router:Router){

    }

    ngOnInit(){
        
    }

    register(f:NgForm){
        
        this.listinoService.newListino(f.value.nomeListino,f.value.anno,f.value.idManufacturer).subscribe((response) => {
            console.log("anno2 = "+f.value.anno);
            if (response != null) {
              this.router.navigateByUrl("/gestioneListino");
            }
        })
    }
}
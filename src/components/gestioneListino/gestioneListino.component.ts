import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";

@Component({
    selector:'app-gestioneListino',
    templateUrl:'./gestioneListino.component.html',
    styleUrls:['./gestioneListino.component.css']
})

export class GestioneListinoComponent implements OnInit{

    constructor(private listinoService:ListinoService, private router:Router){

    }

    ngOnInit(){
        
    }

}
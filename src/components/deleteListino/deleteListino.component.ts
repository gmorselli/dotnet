import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Listino } from "src/models/Listino";

@Component({
    selector:'app.deleteListino',
    templateUrl:'./deleteListino.component.html',
    styleUrls: ['./deleteListino.component.css']
})

export class DeleteListinoComponent implements OnInit{

    public listino: Array<Listino>;

    constructor(private listinoService:ListinoService, private router:Router){

    }

    ngOnInit(){
        this.listinoService.readListino().subscribe((response) => {
            this.listino = response;
        })
    }

    delete(f:NgForm){
        this.listinoService.delete(f.value.idSelected).subscribe((response) => {
            if(response != null){
                this.router.navigateByUrl("gestioneListino")
            }
        })

    }


}
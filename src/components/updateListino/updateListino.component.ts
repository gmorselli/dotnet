import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";
import { Listino } from "src/models/Listino";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-updateListino',
    templateUrl: './updateListino.component.html',
    styleUrls: ['./updateListino.component.css']
})

export class UpdateListinoComponent implements OnInit{

    public listino : Array<Listino>
    
    constructor(private listinoService:ListinoService, private router:Router){

    }

    ngOnInit(){
        this.listinoService.readListino().subscribe((response) => {
            this.listino = response;
        })

    }

    update(f:NgForm){
        this.listinoService.edit(f.value.idselected, f.value.newNomeListino, f.value.newAnno).subscribe((response) => {
            if(response != null){
                this.router.navigateByUrl("/gestioneListino");
            }

            
        })
    
    }

}
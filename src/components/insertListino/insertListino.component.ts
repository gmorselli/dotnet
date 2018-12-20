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
        var installer = sessionStorage.getItem('user');
        var myinstaller = JSON.parse(installer);
        console.log(myinstaller.id);
        this.listinoService.newListino(f.value.nomeListino,f.value.anno,myinstaller.id,f.value.idManufacturer).subscribe((response) => {
            
            if (response != null) {
              this.router.navigateByUrl("/gestioneListino");
            }
        })
    }
}
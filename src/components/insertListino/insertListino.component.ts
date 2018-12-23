import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector:'app-insertListino',
    templateUrl:'./insertListino.component.html',
    styleUrls:['./insertListino.component.css']
})

export class InsertListinoComponent implements OnInit{


    
    public idManufacturers=[];

    constructor(private listinoService:ListinoService, private customerService:CustomerService ,private router:Router){

    }

    ngOnInit(){
        this.customerService.readByUserRole("4").subscribe((response)=>{
           
            for(let i=0; i<response.length; i++){
                this.idManufacturers.push(response[i].id);
            }
            
         });
    }

    register(f:NgForm){
        var installer = sessionStorage.getItem('user');
        var mycustomer = JSON.parse(installer);
        console.log(mycustomer.id);
        this.listinoService.newListino(f.value.nomeListino,f.value.anno,mycustomer.id,f.value.idSelected).subscribe((response) => {
            
            if (response != null) {
              this.router.navigateByUrl("/gestioneListino");
            }
        })

        
    }
}
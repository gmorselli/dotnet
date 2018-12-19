import { Component, OnInit } from "@angular/core";
import { ListinoService } from "src/services/listino.service";
import { Router } from "@angular/router";
import { CustomerService } from "src/services/customer.service";
import { Listino } from "src/models/Listino";

@Component({
    selector:'app-readListino',
    templateUrl:'./readListino.component.html',
    styleUrls:['./readListino.component.css']
})

export class ReadListinoComponent implements OnInit{
    
    public listino : Array<Listino>;

     constructor(private listinoService:ListinoService, private router: Router){

     }

     ngOnInit(){
         this.listinoService.readListino().subscribe((response) => {
             this.listino = response;
         }) 

     }
}
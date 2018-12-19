import { Component, OnInit } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-updateitemType',
    templateUrl: './updateitemType.component.html',
    styleUrls: ['./updateitemType.component.css']
  })
  export class UpdateitemtypeComponent implements OnInit{
    constructor(private itemtypeService: ItemtypeService , private router:  Router){

    }
    ngOnInit(){

    }

    update(f:NgForm){
   
        this.itemtypeService.updateItemType(f.value.itemTypeId,f.value.marca,f.value.modello,f.value.categoria,f.value.descrizione).subscribe((response) => {
          if (response != null) {
            this.router.navigateByUrl("/itemtype");
          }
          
      });
    
      }
}
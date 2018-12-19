import { Component, OnInit } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-insertitemType',
    templateUrl: './insertitemType.component.html',
    styleUrls: ['./insertitemType.component.css']
  })
  export class InsertitemtypeComponent implements OnInit{
    constructor(private itemtypeService: ItemtypeService , private router:  Router){

    }
    ngOnInit(){

    }
    
    insert(f:NgForm){
   
      this.itemtypeService.addNewItemType(f.value.marca,f.value.modello,f.value.categoria,f.value.descrizione).subscribe((response) => {
        if (response != null) {
          this.router.navigateByUrl("/itemtype");
        }
        
    });
  
    }
}
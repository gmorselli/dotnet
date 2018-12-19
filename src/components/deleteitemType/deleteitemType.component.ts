import { Component, OnInit } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-deleteitemType',
    templateUrl: './deleteitemType.component.html',
    styleUrls: ['./deleteitemType.component.css']
  })
  export class DeleteitemtypeComponent implements OnInit{
    constructor(private itemtypeService: ItemtypeService , private router:  Router){

    }
    ngOnInit(){

    }

    delete(f:NgForm){
   
      this.itemtypeService.deleteItemType(f.value.itemTypeId).subscribe((response) => {
        if (response != null) {
          this.router.navigateByUrl("/itemtype");
        }
        
    });
  
    }
}
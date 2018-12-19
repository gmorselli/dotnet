import { Component, OnInit } from "@angular/core";
import { ItemtypeService } from "src/services/itemtype.service";
import { NgForm } from "@angular/forms";
import {ItemType} from "../../models/ItemType";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
    selector: 'app-readitemType',
    templateUrl: './readitemType.component.html',
    styleUrls: ['./readitemType.component.css']
  })
  export class ReaditemtypeComponent implements OnInit{
    itemTypeList:Array<ItemType>;
    constructor(private itemtypeService: ItemtypeService , private router:  Router){
        
    }
    ngOnInit(){
        this.itemtypeService.MyitemTypeList().subscribe(response => {this.itemTypeList = response});
    }
}
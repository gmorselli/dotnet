import { ItemService } from 'src/services/item.service';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "src/services/customer.service";
import { NewCustomer } from "src/models/NewCustomer";
import { BuildingService } from 'src/services/building.service';
import { FloorService } from 'src/services/floor.service';
import { RoomService } from 'src/services/room.service';
import { BasicItem } from 'src/models/BasicItem';
import { NewItem } from 'src/models/NewItem';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-selectManufacturer',
    templateUrl: './selectManufacturer.component.html',
    styleUrls: ['./selectManufacturer.component.css']
  })
  export class SelectManufacturerComponent implements OnInit{

    public manufacturers: Array<NewCustomer>;
    public buildingId: string;
    public items: Array<NewItem>;

    constructor(private buildingService: BuildingService,
        private itemService: ItemService,
        private customerService: CustomerService,
        private router:  Router,
        private route: ActivatedRoute){

    }
    ngOnInit(){
        this.buildingId = this.route.snapshot.paramMap.get('buildingId');
        this.customerService.readAllManufacturers().subscribe((response) => {    
            this.manufacturers = response;
            console.log("la size è "+ this.manufacturers.length);
        });
        this.itemService.findByBuilding(this.buildingId).subscribe((response)=>{
            this.items=response;
            console.log(response.length);
        })
    }
associa(f:NgForm){}

    // Mi prendo i MIEI LISTINI - SONO un installatore quindi posso vedere solo i listini che ho creato io
    // Di conseguenza, sceglierò un listino che varrà per ogni item all'interno del building
    // Si assume in questa fase che il building sia comunque già stato completato
    // Una volta scelto




}
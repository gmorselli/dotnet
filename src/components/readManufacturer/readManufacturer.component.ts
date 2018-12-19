import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";

@Component({
    selector: 'app-readManufacturer',
    templateUrl: './readManufacturer.component.html',
    styleUrls: ['./readManufacturer.component.css']
})
export class ReadManufacturerComponent implements OnInit{

    public manufacturers: Array<NewCustomer>;

    constructor(private customerService: CustomerService, private router: Router){

    }
    ngOnInit(){
        this.customerService.readAllManufacturers().subscribe((response) => {
            this.manufacturers = response;
        });
    }
}
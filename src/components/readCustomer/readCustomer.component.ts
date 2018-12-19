import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";

@Component({
    selector: 'app-readCustomer',
    templateUrl: './readCustomer.component.html',
    styleUrls: ['./readCustomer.component.css']
})
export class ReadCustomerComponent implements OnInit{

    public customers: Array<NewCustomer>;

    constructor(private customerService: CustomerService, private router: Router){

    }
    ngOnInit(){
        this.customerService.readAll().subscribe((response) => {
            this.customers = response;
        });
    }
}
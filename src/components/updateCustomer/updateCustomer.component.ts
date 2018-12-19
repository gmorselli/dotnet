import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { NewCustomer } from "src/models/NewCustomer";
import { Customer } from "src/models/Customer";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
    selector: 'app-updateCustomer',
    templateUrl: './updateCustomer.component.html',
    styleUrls: ['./updateCustomer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
    public customers: Array<NewCustomer>;
    public customer: Customer;
    public field : string;
    public username : string;
    public newValue : string;
    constructor(private customerService: CustomerService, private router: Router){
        
    }
    ngOnInit() {
        this.customerService.readAll().subscribe((response) => {
            this.customers = response;
            console.log("la size è "+ this.customers.length);
        });
    }
    update(f:NgForm){
        
        this.username=f.value.usernameSelected;
        this.field=f.value.fieldSelected;
        this.newValue=f.value.value;
        this.customerService.update(this.username,this.field,this.newValue).subscribe((response) => {
            this.router.navigateByUrl("/gestioneCustomer");
        });
    }}
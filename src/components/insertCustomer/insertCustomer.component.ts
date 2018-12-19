import { Component, OnInit } from "@angular/core";
import { InsertCustomerService } from "src/services/insertCustomer.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerService } from "src/services/customer.service";

@Component({
    selector: 'app-insertCustomer',
    templateUrl: './insertCustomer.component.html',
    styleUrls: ['./insertCustomer.component.css']
  })
  export class InsertCustomerComponent implements OnInit{
    constructor(private customerService: CustomerService , private router:  Router){

    }
    ngOnInit(){

    }
    register(f:NgForm){
   
      this.customerService.newCustomer("2",f.value.nome,f.value.cognome,f.value.email,f.value.username,f.value.password).subscribe((response) => {
        if (response != null) {
          this.router.navigateByUrl("/gestioneCustomer");
        }
        
    });
  
    }
  }
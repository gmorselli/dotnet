import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-insertManufacturer",
    templateUrl: "./insertManufacturer.component.html",
    styleUrls: ["./insertManufacturer.component.css"]
})
export class InsertManufacturerComponent implements OnInit{
    constructor(private customerService: CustomerService,private router: Router){}
    ngOnInit() {}

    register(f:NgForm){
   
        this.customerService.newManufacturer("4",f.value.nome,f.value.email).subscribe((response) => {
          if (response != null) {
            this.router.navigateByUrl("/gestioneManufacturer");
          }
          
      });
    
      }

}

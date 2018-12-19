import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { NgForm } from "@angular/forms";
import { NewCustomer } from "src/models/NewCustomer";
import { Router } from "@angular/router";

@Component({
    selector:"app-updateManufacturer",
    templateUrl: "./updateManufacturer.component.html",
    styleUrls: ["./updateManufacturer.component.css"]
})
export class UpdateManufacturerComponent implements OnInit{
    public manufacturers: Array<NewCustomer>;
    public field : string;
    public username : string;
    public newValue : string;
constructor(private customerService: CustomerService,private router:Router){

}
ngOnInit(){
    this.customerService.readAllManufacturers().subscribe((response) => {
        this.manufacturers = response;
        console.log("la size è "+ this.manufacturers.length);
    });
}

update(f:NgForm){
     this.username=f.value.usernameSelected;
    this.field=f.value.fieldSelected;
    this.newValue=f.value.value;
    console.log(this.field+" "+this.newValue);
    this.customerService.update(this.username,this.field,this.newValue).subscribe((response) => {
        this.router.navigateByUrl("/gestioneManufacturer");
    });
}
}
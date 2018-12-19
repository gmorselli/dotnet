import { OnInit, Component } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router, ROUTER_CONFIGURATION } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-deleteManufacture',
    templateUrl: './deleteManufacturer.component.html',
    styleUrls: ['./deleteManufacturer.component.css']
})
export class DeleteManufacturerComponent implements OnInit{
    public manufacturers: Array<NewCustomer>;
    constructor(private customerService: CustomerService, private router: Router){}
    ngOnInit(){ 
        console.log("sono qua!");
        this.customerService.readAllManufacturers().subscribe((response) => {
        this.manufacturers = response;
    });
    
}
    delete(f:NgForm){
        this.customerService.delete(f.value.usernameSelected).subscribe((response)=>{
            if (response != null) {
                this.router.navigateByUrl("/gestioneManufacturer");
              }
        });
    }
}
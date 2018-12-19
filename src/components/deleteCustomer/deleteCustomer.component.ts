import { OnInit, Component } from "@angular/core";
import { CustomerService } from "src/services/customer.service";
import { Router, ROUTER_CONFIGURATION } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-deleteCustomer',
    templateUrl: './deleteCustomer.component.html',
    styleUrls: ['./deleteCustomer.component.css']
})
export class DeleteCustomerComponent implements OnInit{
    public customers: Array<NewCustomer>;
    constructor(private customerService: CustomerService, private router: Router){}
    ngOnInit(){ 
        this.customerService.readAll().subscribe((response) => {
        this.customers = response;
    });
}
    delete(f:NgForm){
        this.customerService.delete(f.value.usernameSelected).subscribe((response)=>{
            if (response != null) {
                this.router.navigateByUrl("/gestioneCustomer");
              }
        });
    }
}
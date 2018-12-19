import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";
import { Router } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";
import { NgForm } from "@angular/forms";
import { Customer } from "src/models/Customer";
import { Installer } from "src/models/Installer";

@Component({
    selector: 'app-updateInstaller',
    templateUrl: './updateInstaller.component.html',
    styleUrls: ['./updateInstaller.component.css']
  })
  export class UpdateinstallerComponent implements OnInit{
      public installers: Array<NewCustomer>
      public customer: Customer;
      public username:string;
      public field:string;
      public value:string;
    constructor(private installerService: InstallerService, private router:  Router ){
      
    }
    ngOnInit(){
        this.installerService.readAll().subscribe((response) => {
            this.installers = response;
        });
      
    }  
    update(f:NgForm){
        this.username=f.value.usernameSelected;
        this.field=f.value.selected;
        this.value=f.value.value;
        console.log("username= "+this.username+"field= "+this.field+"value= "+this.value );
        this.installerService.update(this.username,this.field,this.value).subscribe((response) => {
            this.router.navigateByUrl("/installerManager")
        });
        
    }
}
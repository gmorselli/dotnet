import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";
import { Router, ROUTER_CONFIGURATION } from "@angular/router";
import { NgForm } from "@angular/forms";
import { NewCustomer } from "src/models/NewCustomer";

@Component({
    selector: 'app-deleteInstaller',
    templateUrl: './deleteInstaller.component.html',
    styleUrls: ['./deleteInstaller.component.css']
  })
  export class DeleteinstallerComponent implements OnInit{
      public installers: Array<NewCustomer>
      username: string;
    constructor(private installerService: InstallerService, private router:  Router ){
      
    }
    ngOnInit(){
        this.installerService.readAll().subscribe((response) => {
            this.installers = response;
        });
    }

    delete(f:NgForm){
            this.username=f.value.username;
            console.log("username="+this.username);
            this.installerService.delete(this.username).subscribe((response)=>{
                if (response != null) {
                    this.router.navigateByUrl("/installerManager");
                  }
            });
    }
    }
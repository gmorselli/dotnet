import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";
import { Router } from "@angular/router";
import { NewCustomer } from "src/models/NewCustomer";

@Component({
    selector: 'app-readInstaller',
    templateUrl: './readInstaller.component.html',
    styleUrls: ['./readInstaller.component.css']
  })
  export class ReadinstallerComponent implements OnInit{
      public installers: Array<NewCustomer>
    constructor(private installerService: InstallerService, private router:  Router ){
      
    }
    ngOnInit(){
      this.installerService.readAll().subscribe((response) => {
        this.installers = response;
    });  
    }

    
}
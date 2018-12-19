import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";

@Component({
    selector: 'app-gestioneInstaller',
    templateUrl: './gestioneInstaller.component.html',
    styleUrls: ['./gestioneInstaller.component.css']
  })
  export class GestioneInstallerComponent implements OnInit{
    constructor(private installerService: InstallerService ){
      
    }
    ngOnInit(){

    }
    
  }

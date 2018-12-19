import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";
import {Installer} from "../../models/Installer";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-insertInstaller',
    templateUrl: './insertInstaller.component.html',
    styleUrls: ['./insertInstaller.component.css']
  })
  export class InsertinstallerComponent implements OnInit{
    constructor(private installerService: InstallerService, private router:  Router ){
      
    }
    ngOnInit(){

    }

    insert(f:NgForm){
        this.installerService.newInstaller("3",f.value.nome,f.value.cognome,f.value.email,f.value.username,f.value.password).subscribe((response) => {
            if (response != null) {
              this.router.navigateByUrl("/installerManager");
            }
            
        });
      
        }
    
  }
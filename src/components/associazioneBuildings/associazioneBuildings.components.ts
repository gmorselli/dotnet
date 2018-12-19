import { Component, OnInit } from "@angular/core";
import { InstallerService } from "src/services/installer.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { NewCustomer } from "src/models/NewCustomer";
import { Building } from "src/models/Building";
import { BuildingService } from "src/services/building.service";

@Component({
    selector: 'app-associazioneBuildings',
    templateUrl: './associazioneBuildings.component.html',
    styleUrls: ['./associazioneBuildings.component.css']
  })
  export class AssociazioneBuildingsComponent implements OnInit{
    public installers: Array<NewCustomer> ;
    public buildings : Array<Building>; 
      constructor(private installerService: InstallerService ,private buildingService: BuildingService, private router:  Router){

    }
    ngOnInit(){
        this.installerService.readAll().subscribe(response => {this.installers = response});
        this.buildingService.findAll().subscribe(response => {this.buildings = response});
       
    }
    
    associa(f:NgForm){
      this.installers.forEach(function (value) {
        console.log(value);
    });
      this.installerService.associazioneBuildings(f.value.buildingSelected,f.value.installerSelected).subscribe((response) => {
        if (response != null) {
          this.router.navigateByUrl("/installerManager");
        }
        
    });  
    
  }
}
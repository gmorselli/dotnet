import { Component, OnInit } from "@angular/core";
import { SuperuserService } from "src/services/superuser.service";

@Component({
    selector: 'app-superuser',
    templateUrl: './superuser.component.html',
    styleUrls: ['./superuser.component.css']
  })
  export class SuperuserComponent implements OnInit{
    constructor(private superuserService: SuperuserService ){

    }
    ngOnInit(){

    }
  }
  
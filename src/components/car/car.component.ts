import { Component, OnInit } from "@angular/core";
import { Car } from "../../models/Car";
import { CarService } from "../../services/car.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})

export class CarComponent implements OnInit {
  carsList: Car[];
  result: string;
  
  constructor(private carService: CarService, private router: Router) { 

  }

  ngOnInit() {
    this.result = this.carService.feedback;
    this.carService.myCarsList().subscribe(response => {this.carsList = response});
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe(response => {
      if(response == 0)
        this.result = "Auto in sosta! Devi terminare la sosta prima di poterla eliminare";
      else {
        this.result = "Auto eliminata con successo";
        this.carService.myCarsList().subscribe(response => {this.carsList = response});
      }
    });
  }

}

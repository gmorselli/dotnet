import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CarService } from "../../services/car.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-addCar",
  templateUrl: "./addCar.component.html",
  styleUrls: ["./addCar.component.css"]
})

export class AddCarComponent implements OnInit {
  feedback: string;
  
  constructor(
    private carService: CarService, private router: Router) { 

  }

  ngOnInit() {
    this.carService.deleteFeedback();
  }

  addNewCar(f: NgForm): void{
    this.carService.addNewCar(f.value.licensePlate, f.value.name).subscribe(response => {
      this.feedback = "Auto aggiunta con successo";  
      this.carService.changeFeedback(this.feedback);
      this.router.navigateByUrl("/car");
    });
  }
}

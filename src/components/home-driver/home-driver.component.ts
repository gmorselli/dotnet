import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";

@Component({
  selector: "app-home-driver",
  templateUrl: "./home-driver.component.html",
  styleUrls: ["./home-driver.component.css"]
})

export class HomeDriverComponent implements OnInit {
  
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.carService.deleteFeedback();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}

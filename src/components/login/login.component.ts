import { Component, OnInit } from "@angular/core";
import { UserService } from "src/services/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Customer } from "src/models/Customer";
import { CustomerService } from "src/services/customer.service";

/*import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  feedback: string;
  user: User;

  constructor(private userService: UserService, private router: Router){

  }

  ngOnInit(){
    this.feedback = this.userService.feedback;
    this.userService.deleteFeedback();
  }

  login(f: NgForm): void{
      this.userService.login(f.value.username, f.value.password).subscribe((response) => {
        if (response != null) {
          this.user = response;
          sessionStorage.setItem("user", JSON.stringify(this.user));
          if(response.type == 1)
            this.router.navigateByUrl("/homeDriver");
          else if(response.type == 0)
            this.router.navigateByUrl("/homeOwner");
        } else
            this.feedback = "Username o password errati";
      });
  }


}
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  customer : Customer;

  constructor(private customerService:CustomerService, private router:  Router){

  }
  ngOnInit(){    
  }

  login(f:NgForm): void{
    console.log("mi arrivano username="+ f.value.username + " password="+ f.value.password)
    this.customerService.login(f.value.username, f.value.password).subscribe((response) => {
      if (response != null) {
        this.customer=response;
        sessionStorage.setItem("user", JSON.stringify(this.customer));
           if(response.userRole==1)
           this.router.navigateByUrl("/superuser");
            else if(response.userRole==2)
            this.router.navigateByUrl("/gestioneBuilding");
            else if(response.userRole==3)
            this.router.navigateByUrl("/installer");
      }
  });
}
}
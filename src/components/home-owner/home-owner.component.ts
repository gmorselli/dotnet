import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.component.html',
  styleUrls: ['./home-owner.component.css']
})

export class HomeOwnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

}

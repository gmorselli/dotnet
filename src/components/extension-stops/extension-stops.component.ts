import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StopService } from "../../services/stop.service";
import { Stop } from "../../models/Stop";
import { FormsModule } from "@angular/forms";
import { PaymentService } from "../../services/payment.service";

@Component({
  selector: "app-extension-stops",
  templateUrl: "./extension-stops.component.html",
  styleUrls: ["./extension-stops.component.css"]
})

export class ExtensionStopsComponent implements OnInit {

  wallet: any;
  myStopsList: Stop[];

  constructor(private stopService: StopService, private router: Router, private paymentService: PaymentService, private ref: ChangeDetectorRef) { 

  }

  ngOnInit() {
     this.stopService.myStopsList().subscribe(response => {this.myStopsList = response});
     this.paymentService.getwallet().subscribe(response => { this.wallet = response });
    }

    updateWallet(newAmount: number) {
      this.wallet.amount = newAmount;
      this.ref.detectChanges();
    }
  
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stop } from '../../models/Stop';
import { StopService } from '../../services/stop.service';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'tr[app-extension-stops-row]',
  templateUrl: './extension-stops-row.component.html',
  styleUrls: ['./extension-stops-row.component.css']
})
export class ExtensionStopsRowComponent implements OnInit {

  @Input() stop: Stop;
  price: number;
  wallet: any;

  @Output() onWalletChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private stopService: StopService, private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getwallet().subscribe(response => { this.wallet = response });
  }

  detectChange(f: NgForm): void {
    console.log("time: " + f.value.select);
    this.price = (this.stop.price / 60) * f.value.select;
  }

  prolungaSosta(f: NgForm): void {
    if (this.wallet.amount >= this.price) {
      this.stopService.prolungaSosta(f.value.select, this.stop).subscribe((response) => { this.stop.finish = response; });
      this.paymentService.modifyWallet(-this.price, this.stop.id_stop).subscribe((response) => { this.onWalletChanged.emit(response) });
    } else {
      console.log("credito insufficiente, ricaricare il wallet!");
      alert("credito insufficiente, ricaricare il wallet!");
    }

  }

}

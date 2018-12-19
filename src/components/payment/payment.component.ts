import { Component, Renderer, OnInit, NgZone, Output } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/Payment';

import { Transaction } from '../../models/Transaction';
//import { Wallet } from '../../models/Wallet';
//import { AllPayment } from 'src/models/AllPayment';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
    paymentList: Payment[];
    transactionList: Transaction[];
    //allPayment: AllPayment;
    paymentToken: string;
    globalListener: any;
    wallet: any;
    price: number;
    
    constructor(private paymentService: PaymentService, private renderer: Renderer, private _zone: NgZone) { }

    ngOnInit() {
        this.paymentService.getpayments().subscribe(response => { this.paymentList = response.payment_list, this.transactionList = response.transaction_list });
        this.paymentService.getwallet().subscribe(response => { this.wallet = response });
    }


    modifyWallet(addedAmount: number) {
        console.log("entrata nel metodo modifyWallet");
        var self = this;
        return new Promise((resolve) => {
          var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_wsNSAHk7uRwp7SHSthrcciFZ',
            locale: 'auto',
            token: function (token: any) {
              self.paymentToken = token.id;
              console.log("token id:" + this.paymentToken);
              // confirms the payment (sovrascrive addedAmount con il risultato effettivo della transazione)
              self.paymentService.executePayment(self.paymentToken, addedAmount).subscribe( response => {
              alert("Tansazione eseguita con successo!\n\n Il tuo portafoglio è stato incrementato di " +response +" €"); 
              this.addedAmount = response;} );
              // updates the wallet and update tramsactionList or paymentList 
              self.paymentService.modifyWallet(addedAmount, 1234).subscribe((response) => { self.wallet.amount = response });
            }
          });
          handler.open({
            name: 'PCarpet',
            description: 'Ricarica il wallet',
            amount: addedAmount * 100
          });
          self.globalListener = self.renderer.listenGlobal('window', 'popstate', () => {
            handler.close();
          });
          resolve();
        });
      }
    
    
     // modifyWallet(takenAmount: number) {
       // this.paymentService.takeFromWallet(takenAmount).subscribe((response) => { this.wallet.amount = response })
      //}
    
}

    

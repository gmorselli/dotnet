import { Payment } from "./Payment";
import {Transaction} from "./Transaction";

export class AllPayment{ 
    
    payment_list: Array<Payment>
    transaction_list: Array<Transaction>;
   
    constructor(payment: Array<Payment>, transaction: Array<Transaction>){
        this.payment_list = payment;
        this.transaction_list = transaction;
    }
}
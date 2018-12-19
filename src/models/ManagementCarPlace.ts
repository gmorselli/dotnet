import { Payment } from "./Payment";
import { Stop } from "./Stop";
import { Slot } from "./Slot";

export class ManagementCarplace{
    slot: Slot;
    stop_list: Array<Stop>;
    payment_list: Array<Payment>

    constructor(slot: Slot , payment: Array<Payment>, stop: Array<Stop>){
        this.slot = slot;
        this.payment_list = payment;
        this.stop_list = stop;
    }
}
export class Transaction {

    id: number;
    quantity: number;
    date: Date;
    card_number: number;   
 
    constructor(id: number, quantity: number, date: Date, card_number: number) {
        this.id = id;
        this.quantity = quantity;
        this.date = date;
        this.card_number = card_number;
    }
}

export class Wallet{
    id: number;
    amount: number;
    username: string;

    constructor(id: number, amount: number, username: string){
        this.id = id;
        this.amount = amount;
        this.username = username;
    }
}
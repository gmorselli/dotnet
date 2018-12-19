export class User{
    username: string;
    password: string;
    type: number;
    name: string;
    surname: string;
    address: string;
    cap: number;
    handiccaped: string;
    phone: string;
    email: string;

    constructor(username: string, password: string, type: number, name: string, surname: string, address: string, cap: number, handiccaped: string, phone: string, email: string){
        this.username = username;
        this.password = password;
        this.type = type;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.cap = cap;
        this.handiccaped = handiccaped;
        this.phone = phone;
        this.email = email;
    }


}
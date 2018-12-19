export class NewCustomer{
    nome: string;
    cognome: string;
    email: string;
    username: string;
    userRole: number;
    password: string;
    
        constructor(nome:string, cognome: string, email: string, username: string, userRole: number, password:string){
            this.nome=nome;
            this.cognome=cognome;
            this.email=email;
            this.username=username;
            this.password = password;
            this.userRole= userRole;
        }
    }
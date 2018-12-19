export class Installer {
    nome:string
    cognome:string
    email:string
    username:string
    userRole:number
    constructor(
         nome: string,
         cognome: string,
         email: string,
         username: string,
         userRole: number
    ) {
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.username=username;
        this.userRole=userRole;
    }
}
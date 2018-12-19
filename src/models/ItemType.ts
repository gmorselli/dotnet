export class ItemType{
    id: number
    categoria: string
    modello: string
    marca: string
    descrizione: string

    constructor(id:number,categoria:string,modello:string,marca:string,descrizione:string){
        this.id=id;
        this.categoria=categoria;
        this.modello=modello;
        this.marca=marca;
        this.descrizione=descrizione;
    }
}
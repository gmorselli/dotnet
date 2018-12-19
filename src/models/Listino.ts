import { Customer } from "./Customer";

export class Listino{
    nomeListino:string;
    anno:string;
    idManufacturer:Customer;

    constructor(nomeListino:string, anno:string, idManufacturer:Customer){
        this.nomeListino = nomeListino;
        this.anno = anno;
        this.idManufacturer = idManufacturer;
    }
}
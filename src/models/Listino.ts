import { Customer } from "./Customer";
import { NewCustomer } from "./NewCustomer";

export class Listino{
    nomeListino:string;
    anno:string;
    idManufacturer:NewCustomer;

    constructor(nomeListino:string, anno:string, idManufacturer:NewCustomer){
        this.nomeListino = nomeListino;
        this.anno = anno;
        this.idManufacturer = idManufacturer;
    }
}
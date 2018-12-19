import { Injectable } from "@angular/core";
import { Customer } from "src/models/Customer";
import { Observable } from "rxjs";
import { HttpParams, HttpClient } from "@angular/common/http";
import { Listino } from "src/models/Listino";


@Injectable({
    providedIn: 'root'
})

export class ListinoService{

    constructor(private http : HttpClient){}

    newListino(nomeListino:string, anno:string, idManufacturer:string):Observable<Listino>{
        const params = new HttpParams().set("nomeListino",nomeListino).set("anno",anno).set("idManufacturer",idManufacturer);
        console.log("anno ="+anno);
        return this.http.post<Listino>("http://localhost:8080/Listino/insert", params)
    }

    readListino():Observable<Array<Listino>>{
        return this.http.get<Array<Listino>>("http://localhost:8080/Listino/read")
    }

    delete(id:string):Observable<boolean>{
        const params = new HttpParams().set("id",id);
        return this.http.post<boolean>("http://localhost:8080/Listino/delete",params)
    }

    edit(id:string ,nomeListino:string, anno:string):Observable<Listino>{
        const params = new HttpParams().set("id",id).set("nomeListino",nomeListino).set("anno",anno);
        return this.http.post<Listino>("http://localhost:8080/Listino/edit", params)
    }
   
}
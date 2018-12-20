import { Injectable } from "@angular/core";
import { Customer } from "src/models/Customer";
import { Observable } from "rxjs";
import { HttpParams, HttpClient } from "@angular/common/http";
import { Listino } from "src/models/Listino";

const base="http://localhost:51947/api/";

@Injectable({
    providedIn: 'root'
})

export class ListinoService{

    constructor(private http : HttpClient){}

 /*   newListino(nomeListino:string, anno:string,idInstaller : string, idManufacturer:string):Observable<Listino>{
        const params = new HttpParams().set("nomeListino",nomeListino).set("anno",anno).set("idManufacturer",idManufacturer);
        console.log("anno ="+anno);
        return this.http.post<Listino>("http://localhost:8080/Listino/insert", params)
    }
*/
    newListino(nomeListino:string, anno:string,idInstaller : number, idManufacturer:number):Observable<Listino>{
        console.log("Inserimento listino installer:"+idInstaller+" idManufacturer:"+idManufacturer);
        return this.http.post<Listino>(base+ "Listino/Inserisci?anno="+anno+"&nome="+nomeListino+"&idInstaller="+idInstaller+"&idManufacturer="+idManufacturer,"");
        
    }

    readListino():Observable<Array<Listino>>{
        return this.http.get<Array<Listino>>(base+"Listino");
    }

    delete(id:string):Observable<boolean>{
        return this.http.delete<boolean>(base+"Listino?id="+id);
    }

    edit(id:string ,nomeListino:string, idInstaller: string, anno:string):Observable<Listino>{
        return this.http.put<Listino>(base+ "Listino?id="+id+"&anno="+anno+"&nome="+nomeListino+"&idInstaller="+idInstaller,"");
    }
   
}
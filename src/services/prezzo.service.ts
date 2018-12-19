import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpParams, HttpClient } from "@angular/common/http";
import { Prezzo } from "src/models/Prezzo";


@Injectable({
    providedIn: 'root'
})

export class PrezzoService{
    baseUrl = 'http://localhost:8080/';

    constructor(private http : HttpClient){}
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log('${operation} failed: ${error.message}');
            return of(result as T);
        };
    }

    insert(prezzo:string,itemTypeId:string,idListino:string): Observable<Prezzo>{
        const params= new HttpParams().set("prezzo",prezzo).set("itemTypeId",itemTypeId).set("idListino",idListino);
        return this.http.post<Prezzo>("http://localhost:8080/Prezzo/new",params);
    }

    save(prezzo: Prezzo): Observable<Prezzo> {
        console.log("sto salvando");
        let url : string = this.baseUrl + 'Prezzo/new';
        let itemType = String(prezzo.itemType);
        console.log("itemType" +itemType);
        let newPrezzo= String(prezzo.prezzo);
        console.log("prezzo= "+prezzo)
        let idListino= String(prezzo.listino);
        let params= new HttpParams().set('prezzo',newPrezzo )
        .set('itemTypeId', itemType).set('idListino',idListino);
        console.log("sto per tornare");
        return <Observable<Prezzo>> this.http.post(url, params); 
       
    }
}
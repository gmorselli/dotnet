import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {ItemType} from "../models/ItemType";

@Injectable({
    providedIn: 'root'
  })
  export class ItemtypeService{
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return of(result as T);
      };
    }

    MyitemTypeList(): Observable<Array<ItemType>>{
    return this.http.get<Array<ItemType>>('http://localhost:8080/ItemType/read');
    }

    deleteItemType(itemTypeId: string){
      return this.http.get<ItemType>('http://localhost:8080/ItemType/delete?itemTypeId='+itemTypeId);
    }

    addNewItemType(categoria:string,modello:string,marca:string,descrizione:string):  Observable<ItemType>{
      const params = new HttpParams().set('categoria', categoria).set('modello',modello).set('marca',marca).set('descrizione',descrizione);
      return this.http.post<ItemType>('http://localhost:8080/ItemType/new', params);
    }

    updateItemType(itemTypeId:string,categoria:string,modello:string,marca:string,descrizione:string): Observable<ItemType>{
      const params = new HttpParams().set('itemTypeId',itemTypeId).set('categoria', categoria).set('modello',modello).set('marca',marca).set('descrizione',descrizione);
      return this.http.post<ItemType>('http://localhost:8080/ItemType/edit', params);
    }
  }
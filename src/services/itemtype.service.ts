import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {ItemType} from "../models/ItemType";

const base="http://localhost:51947/api/";

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
    return this.http.get<Array<ItemType>>(base+'ItemType');
    }

    deleteItemType(itemTypeId: string){
      return this.http.delete<ItemType>(base+'ItemType?id='+itemTypeId);
    }

    addNewItemType(categoria:string,modello:string,marca:string,idCustomer:string,descrizione:string):  Observable<ItemType>{
      console.log("marca= "+marca+ ", idInstaller="+idCustomer);
    //  const params = new HttpParams().set('categoria', categoria).set('modello',modello).set('marca',marca).set('descrizione',descrizione);
      return this.http.post<ItemType>(base+"ItemType/Inserisci?categoria="+categoria+"&descrizione="+descrizione+"&marca="+marca+"&modello="+modello+"&idCustomer="+idCustomer, '');
    }

    updateItemType(itemTypeId:string,categoria:string,modello:string,marca:string,descrizione:string): Observable<ItemType>{
      return this.http.put<ItemType>(base+"ItemType?id="+itemTypeId+"&categoria="+categoria+"&descrizione="+descrizione+"&marca="+marca+"&modello="+modello,'');
    }
  }
import { BasicItem } from './../models/BasicItem';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewItem } from 'src/models/NewItem';

@Injectable({
    providedIn: 'root'
  })
  export class ItemService{
   
    

    baseUrl = 'http://localhost:8080/';
   
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return of(result as T);
      };
    }

    findByRoom(roomId: string): Observable<Array<BasicItem>> {
        let url : string = this.baseUrl + 'Item/byRoom?roomId=' + roomId;
        console.log(url);
        return <Observable<Array<BasicItem>>> this.http.get<Array<BasicItem>>(url);
    }
    

    findByBuilding(buildingId: string): Observable<Array<NewItem>>{
        let url : string = this.baseUrl+"Item/byBuilding?buildingId="+buildingId;
        return <Observable<Array<NewItem>>> this.http.get<Array<NewItem>>(url);  
    }


    save(item: BasicItem): Observable<BasicItem> {
        console.log("sto salvando");
        let url : string = this.baseUrl + 'Item/new';
        let room  = String(item.room.id);
        console.log("room" + room);
        let itemType = String(item.itemType.id);
        console.log("itemType" +itemType);
        let params= new HttpParams().set('roomId', room)
        .set('itemTypeId', itemType);
        console.log("sto per tornare");
        return <Observable<BasicItem>> this.http.post(url, params); 
       
    }

    delete(id: number): Observable<boolean> {
        console.log("per il momento non cancello "+id);
        let url = this.baseUrl+"Item/delete?itemId="+id;
        return <Observable<boolean>> this.http.get(url);
    }


}
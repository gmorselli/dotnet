import { BasicItem } from './../models/BasicItem';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewItem } from 'src/models/NewItem';

@Injectable({
    providedIn: 'root' 
  })
  export class ItemService{
   
    

    baseUrl = 'http://localhost:51947/api/';
   
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return of(result as T);
      };
    } 

    findByRoom(roomId: number): Observable<Array<BasicItem>> {
        let url : string = this.baseUrl + 'Item/findByRoom?roomId=' + roomId;
        return this.http.get<Array<BasicItem>>(url);
    }
    

    findByBuilding(buildingId: number): Observable<Array<NewItem>>{
        let url : string = this.baseUrl+"Item/findByBuilding?buildingId="+buildingId;
        return this.http.get<Array<NewItem>>(url);  
    }


    save(item: BasicItem): Observable<BasicItem> {
        console.log("sto salvando");
        let url : string = this.baseUrl + 'Item/new';
        let room  = String(item.room.id);
        console.log("room" + room);
        let itemType = String(item.itemType.id);
        console.log("itemType" +itemType);
        console.log("sto per tornare");
        
        return this.http.post<BasicItem>(this.baseUrl+"Item/Inserisci?id="+item.id+"&seriale="+null+"&consumoEnergetico="+null
                +"&idItemType="+itemType+"&idRoom="+room+"&idThing="+0,"")       
    }

    delete(id: number): Observable<boolean> {
        let url = this.baseUrl+"Item/"+id;
        return this.http.delete<boolean>(url);
    }


}
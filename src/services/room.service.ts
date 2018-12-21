import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Room } from 'src/models/Room';
import { Floor } from 'src/models/Floor';

@Injectable({
    providedIn: 'root'
})


export class RoomService {
   
    baseUrl = 'http://localhost:51947/api/';

    roomsByFloor(floorId: string): Observable<Array<Room>> {

        let url : string = this.baseUrl + 'GetByFloor?idFloor=' + floorId;
        return this.http.get<Array<Room>>(url);
    }
    

    
    constructor(private http: HttpClient) { }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log('${operation} failed: ${error.message}');
            return of(result as T);
        };
    }

    updateRoom(id: number, nomeRoom: string, descrizione: string): Observable<Room> {
        return this.http.put<Room>(this.baseUrl+"Room/"+id+"?nome="+nomeRoom+"&descrizione="+descrizione,"");  
    }


    newRoom(nomeRoom: string, descrizione: string, floorId: number): Observable<Room> {
        return this.http.post<Room>(this.baseUrl+"/InserisciR?nome="+nomeRoom+"&descrizione="+descrizione+"&idFloor="+floorId,"");
    }

    delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl+"Room/"+id);
    }

    findById(roomId: number): Observable<Room> {
       return this.http.get<Room>(this.baseUrl+"Room/"+roomId);
    }

    myFloor(roomId: string): Observable<Floor> {
       return this.http.get<Floor>(this.baseUrl+"myFloor?roomId="+roomId);
    }
    

}
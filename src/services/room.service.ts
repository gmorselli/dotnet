import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Room } from 'src/models/Room';
import { Floor } from 'src/models/Floor';

@Injectable({
    providedIn: 'root'
})


export class RoomService {
   
    baseUrl = 'http://localhost:8080/';

    roomsByFloor(floorId: string): Observable<Array<Room>> {

        let url : string = this.baseUrl + 'Room?floorId=' + floorId;
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

    updateRoom(id: string, nomeRoom: string, descrizione: string): Observable<Room> {
        const params = new HttpParams().set('roomId', id)
        .set('nome_room', nomeRoom)
        .set('descrizione', descrizione);
        return this.http.post<Room>('http://localhost:8080/Room/edit', params);  
    }
    newRoom(nomeRoom: string, descrizione: string, floorId: string): Observable<Room> {
        const params = new HttpParams().set('nome_room', nomeRoom).set('descrizione', descrizione).set('floorId', floorId);
        console.log(nomeRoom+" "+descrizione+" "+floorId);
        return this.http.post<Room>('http://localhost:8080/Room/new', params);
    }

    delete(id: String): Observable<boolean> {
        let url : string = this.baseUrl + 'Room/delete?roomId=' + id;
        console.log(url);
        return <Observable<boolean>> this.http.get<boolean>(url);
    }

    findById(roomId: string): Observable<Room> {
       let url : string = this.baseUrl + 'Room/one?roomId='+roomId;
       return <Observable<Room>> this.http.get(url);
    }

    myFloor(roomId: string): Observable<Floor> {
        let url : string = this.baseUrl + 'Room/myFloor?roomId='+roomId;
       return <Observable<Floor>> this.http.get(url);
    }
    

}
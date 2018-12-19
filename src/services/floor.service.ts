import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Floor } from "src/models/Floor";
import {tap, catchError } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})


export class FloorService {
    
    baseUrl = 'http://localhost:8080/';


    constructor(private http: HttpClient) { }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log('${operation} failed: ${error.message}');
            return of(result as T);
        };
    }
    

    delete(floorId: string): Observable<boolean> {
        let url : string = this.baseUrl + 'Floors/delete?floorId=' + floorId;
        console.log(url);
        return <Observable<boolean>> this.http.get<boolean>(url);
    
    }

    updateFloor(floorId: string, nomeFloor: string, descrizione: string): Observable<Floor> {
        const params = new HttpParams().set('floorId', floorId)
        .set('nomeFloor', nomeFloor)
        .set('descrizione', descrizione);
        return this.http.post<Floor>('http://localhost:8080/Floors/edit', params);

    }
   
    newFloor(nomeFloor: string, descrizione: string, buildingId: string): Observable<Floor> {
        const params = new HttpParams().set('nomeFloor', nomeFloor).set('descrizione', descrizione).set('buildingId', buildingId);
        console.log(nomeFloor+" "+descrizione+" "+buildingId);
        return this.http.post<Floor>('http://localhost:8080/Floors/new', params);
    }

    floorsByBuilding(buildingId: string): Observable<Array<Floor>>{
        let url: string = this.baseUrl + 'Floors/floorsByBuilding?buildingId='+buildingId;
        let result : Observable<Array<Floor>> = this.http.get<Array<Floor>>(url);
         return result;
    }



}
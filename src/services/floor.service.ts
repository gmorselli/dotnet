import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Floor } from "src/models/Floor";
import {tap, catchError } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})


export class FloorService {
    
    baseUrl = 'http://localhost:51947/';


    constructor(private http: HttpClient) { }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log('${operation} failed: ${error.message}');
            return of(result as T);
        };
    }
    

    delete(floorId: number): Observable<boolean> {
        let url : string = this.baseUrl + 'api/Floor/' + floorId;
        console.log(url);
        return <Observable<boolean>> this.http.delete<boolean>(url);
    
    }

    updateFloor(floorId: number, nomeFloor: string, descrizione: string): Observable<Floor> {

        
        return this.http.put<Floor>(this.baseUrl+'api/Floor/'+floorId+'?nome='+nomeFloor+'&descrizione='+descrizione, "");

    }
   
    newFloor(nomeFloor: string, descrizione: string, buildingId: number): Observable<Floor> {
        console.log(nomeFloor+" "+descrizione+" "+buildingId);
        return this.http.post<Floor>(this.baseUrl+'InserisciF?nome='+nomeFloor+'&descrizione='+descrizione+'&idBuilding='+buildingId, "");
    }

    floorsByBuilding(buildingId: number): Observable<Array<Floor>>{
        let url: string = this.baseUrl+'GetByBuilding?idBuilding='+buildingId;
        let result : Observable<Array<Floor>> = this.http.get<Array<Floor>>(url);
         return result;
    }


}
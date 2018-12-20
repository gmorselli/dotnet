import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Customer } from '../models/Customer';
import { Building } from '../models/Building';


@Injectable({
    providedIn: 'root'
}) 
export class BuildingService {
    baseUrl = 'http://localhost:51947/api/';
    
    constructor(private http: HttpClient) {}

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          console.log('${operation} failed: ${error.message}');
          return of(result as T);
        };
    }

    getBuildingsByInstaller():Observable<Building[]> {
        let installer: Customer = JSON.parse(sessionStorage.getItem('user'));
        let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
        let httpParams = new HttpParams().set('installer', installer.username);
        let url: string = this.baseUrl + 'Building/installer';
	
        return this.http.get<Building[]>(url, {
            headers: httpHeaders,
            params: httpParams, 
            responseType: 'json'
        })
        .pipe(
            tap(
                (response) => response,
                catchError(this.handleError("get all building by Installer Error", {}))
                )
            );
    }

    newBuilding(indirizzo:string, interno:string, city:string, username:string, cap:string):Observable<Building>{
        return this.http.post<Building>(this.baseUrl+'Building/InserisciB?indirizzo='+indirizzo+'&cap='+cap+'&citta='+city+'&interno='+interno+'&id='+username,'');
    }

    findAll():Observable<Array<Building>>{
        return this.http.get<Array<Building>>(this.baseUrl+'Building');
    }

    delete(buildingId : string):Observable<boolean>{
        //let url : string = 'http://localhost:8080/Building/delete?buildingId='+buildingId;
        return this.http.delete<boolean>(this.baseUrl+'Building?id='+buildingId);

    }
   
    update(idSelected: string, newindirizzo: string, newinterno: string, newcitta: string, newcap: string):Observable<Building>{
        console.log(idSelected+" "+newinterno+" "+newindirizzo+" "+newcitta+" "+newcap);
        console.log("ok");
        return this.http.put<Building>(this.baseUrl+'Building?id='+idSelected+'&indirizzo='+newindirizzo+'&cap='+newcap+'&citta='+newcitta+'&interno='+newinterno,"");
    }

}


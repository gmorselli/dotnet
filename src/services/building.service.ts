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
    baseUrl = 'http://localhost:8080/';
    
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
        const params = new HttpParams().set('indirizzo',indirizzo).set('interno',interno).set('city',city).
        set('username',username).set('cap',cap);

        return this.http.post<Building>('http://localhost:8080/Building/new',params);
    }

    findAll():Observable<Array<Building>>{
        return this.http.get<Array<Building>>('http://localhost:8080/Building/read');
    }

    delete(buildingId : string):Observable<boolean>{
        let url : string = 'http://localhost:8080/Building/delete?buildingId='+buildingId;
        return this.http.get<boolean>(url);

    }
   
    update(idSelected: string, newindirizzo: string, newinterno: string, newcitta: string, newcap: string):Observable<Building>{
        console.log(idSelected+" "+newinterno+" "+newindirizzo+" "+newcitta+" "+newcap);
        const params = new HttpParams().set('buildingId',idSelected).set('indirizzo', newindirizzo).set('interno',newinterno).
        set('city', newcitta).set('cap', newcap);
        console.log("ok");
        return this.http.post<Building>('http://localhost:8080/Building/edit', params);
    }

}


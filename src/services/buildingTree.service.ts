import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { BuildingTree } from '../models/BuildingTree';

@Injectable()
export class BuildingTreeService {
    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          console.log('${operation} failed: ${error.message}');
          return of(result as T);
        };
    }

    getBuildingTree(buildingId: number):Observable<BuildingTree> {
        let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
        let httpParams = new HttpParams().set('buildingId', buildingId.toString());
        let url: string = this.baseUrl + 'buildingTree/tree';
    
        return this.http.get<BuildingTree>(url, {
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

}
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {NewCustomer} from "../models/NewCustomer";

@Injectable({
    providedIn: 'root'
  })
  export class InstallerService{
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return of(result as T);
      };
    }

    newInstaller(userRole:string, name:string, 
      surname:string, email:string, username:string, password:string ): Observable<NewCustomer>{
      
        const params = new HttpParams().set('userRole', userRole).
         set('name', name).set('surname', surname).set('email', email).set('username', username).set('password', password);
      
      return this.http.post<NewCustomer>('http://localhost:8080/Customer/new', params); 

      }

      readAll() : Observable<Array<NewCustomer>>{
        return this.http.get<Array<NewCustomer>>('http://localhost:8080/Customer/readInstaller');
        }

        update(username: string, field: string, newValue: string):Observable<NewCustomer>{
          const params= new HttpParams().set('username',username).set('field',field).set('newValue',newValue);  
          console.log("username= "+username+"field= "+field+"newValue= "+newValue);     
          return this.http.post<NewCustomer>('http://localhost:8080/Customer/edit', params);
  }

  delete(username:string):Observable<boolean>{
    const params = new HttpParams().set('username', username);
    return this.http.post<boolean>('http://localhost:8080/Customer/delete',params);
}

  associazioneBuildings(buildingId : string, username:string): Observable<Array<NewCustomer>>{
      const params = new HttpParams().set('buildingId', buildingId).set('username',username);
      return this.http.post<Array<NewCustomer>>('http://localhost:8080/Building/associazioneBuildingInstaller',params);
  }
}
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {NewCustomer} from "../models/NewCustomer";


const base="http://localhost:51947/api/";

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
      return this.http.post<NewCustomer>(base+'Inserisci?nome='+name+'&cognome='+surname+'&username='+username+'&password='+password+'&user_role='+userRole+'&email='+email,"");
      }

      readAll() : Observable<Array<NewCustomer>>{
        return this.http.get<Array<NewCustomer>>(base+"GetByUserRole?userRole="+3);
      }

      update(username: string, field: string, newValue: string):Observable<NewCustomer>{
          return this.http.put<NewCustomer>(base+'Customer?username='+username+'&field='+field+'&newValue='+newValue,"");
      }

    delete(username:string):Observable<boolean>{
      return this.http.delete<boolean>(base+'Customer?username='+username);
    }

    associazioneBuildings(buildingId : string, username:string): Observable<Array<NewCustomer>>{
      const params = new HttpParams().set('buildingId', buildingId).set('username',username);
      return this.http.post<Array<NewCustomer>>('http://localhost:8080/Building/associazioneBuildingInstaller',params);
    }
}
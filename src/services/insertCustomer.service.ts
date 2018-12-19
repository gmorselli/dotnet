import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewCustomer } from "src/models/NewCustomer";

@Injectable({
    providedIn: 'root'
  })
  export class InsertCustomerService{
    constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return of(result as T);
      };
    }
  

  }
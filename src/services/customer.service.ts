import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Customer } from "src/models/Customer";
import { NewCustomer } from "src/models/NewCustomer";

import { tap, catchError } from 'rxjs/operators';
import {Observable, of, BehaviorSubject} from 'rxjs';


const base="http://localhost:51947/api/";

@Injectable({ providedIn: 'root'}) 
export class CustomerService{


    constructor( private http : HttpClient){}

    


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(result);
            console.error(error);
            console.log('${operation} failed: ${error.message}');
            return of(result as T);
        };
    } 
    login(username:string, password:string):Observable<Customer>{
        const params = new HttpParams().set('username', username).set('password', password);
        return this.http.get<Customer>(base+'Login/Login?username='+username+"&password="+password).
        pipe(tap((response) => console.log("Utente"), catchError(this.handleError("login error", {})))
        );
    }


    newCustomer(userRole:string, name:string, 
        surname:string, email:string, username:string, password:string ): Observable<NewCustomer>{
        
          const params = new HttpParams().set('userRole', userRole).
           set('name', name).set('surname', surname).set('email', email).set('username', username).set('password', password);
        
        return this.http.post<NewCustomer>(base+'Inserisci?nome='+name+'&cognome='+surname+'&username='+username+'&password='+password+'&user_role='+userRole+'&email='+email,""); 
  
    }
    newManufacturer(userRole:string, name:string, 
        email:string): Observable<NewCustomer>{
        
          const params = new HttpParams().set('userRole', userRole).
           set('name', name).set('email', email);
        
        return this.http.post<NewCustomer>('http://localhost:8080/Customer/manufacturer', params); 
  
    }
    readAll():Observable<Array<NewCustomer>>{
        return this.http.get<Array<NewCustomer>>(base+"Customer");
    }
    readAllManufacturers():Observable<Array<NewCustomer>>{
        return this.http.get<Array<NewCustomer>>('http://localhost:8080/Customer/readManufacturers');
    }
    readOne(customerId:string): Observable<Customer>{
        return this.http.get<Customer>('http://localhost:8080/Customer?customerId='+customerId);
    }
    readByUsername(username:string): Observable<Customer>{
        const params = new HttpParams().set('username', username);
        return this.http.post<Customer>('http://localhost:8080/Customer/readOne',params);
    }
    delete(username:string):Observable<boolean>{
        const params = new HttpParams().set('username', username);
        return this.http.post<boolean>('http://localhost:8080/Customer/delete',params);
    }


    updateCustomer(nome:string, 
        cognome:string, email:string, username:string, oldUsername: string): Observable<NewCustomer>{
            console.log("in update "+ nome+"-"+ cognome+"-"+email+"-"+username);
            if(nome!="null"){
            const params = new HttpParams().set('nome', nome).set('oldUsername',oldUsername);
            return this.http.post<NewCustomer>('http://localhost:8080/Customer/edit', params); 
            }else if(cognome!="null"){
            const params= new HttpParams().set('cognome',cognome).set('oldUsername',oldUsername);
            return this.http.post<NewCustomer>('http://localhost:8080/Customer/edit', params); 
            }else if(email!=null){
            const params= new HttpParams().set('email',email).set('oldUsername',oldUsername);
            return this.http.post<NewCustomer>('http://localhost:8080/Customer/edit', params); 
            }else {
                const params= new HttpParams().set('password',username).set('oldUsername',oldUsername);
                return this.http.post<NewCustomer>('http://localhost:8080/Customer/edit', params); 
            }

    }
    update(username: string, field: string, newValue: string):Observable<NewCustomer>{
        const params= new HttpParams().set('username',username).set('field',field).set('newValue',newValue);
       return this.http.post<NewCustomer>('http://localhost:8080/Customer/editManufacturer', params);
    }




}
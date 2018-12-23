import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Customer } from "src/models/Customer";
import { NewCustomer } from "src/models/NewCustomer";

import { tap, catchError } from 'rxjs/operators';
import {Observable, of, BehaviorSubject} from 'rxjs';


const base="http://localhost:51947/api/";

@Injectable({ providedIn: 'root'}) 
export class CustomerService{

    //1:Superuser; 2:Customer; 3:Installer; 4:Manufacturer;

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


    newCustomer(userRole:string, name:string,surname:string, email:string, username:string, password:string ): Observable<NewCustomer>{
        return this.http.post<NewCustomer>(base+'Inserisci?nome='+name+'&cognome='+surname+'&username='+username+'&password='+password+'&user_role='+userRole+'&email='+email,"");
    } 

    newManufacturer(userRole:string, name:string, email:string): Observable<NewCustomer>{
           return this.http.post<NewCustomer>(base+'Inserisci?nome='+name+'&cognome='+null+'&username='+null+'&password='+null+'&user_role='+userRole+'&email='+email,"");
    } 
    readAll():Observable<Array<NewCustomer>>{
        return this.http.get<Array<NewCustomer>>(base+"GetByUserRole?userRole="+2);
    }
    
    readOne(customerId:string): Observable<Customer>{
        return this.http.get<Customer>('http://localhost:8080/Customer?customerId='+customerId);
    }
    readByUsername(username:string): Observable<Customer>{
        const params = new HttpParams().set('username', username);
        return this.http.post<Customer>('http://localhost:8080/Customer/readOne',params);
    }

    readByUserRole(userRole:string):Observable<Array<any>>{
        return this.http.get<Array<any>>(base+"GetByUserRole?userRole="+userRole);
    }

    delete(username:string):Observable<boolean>{
        return this.http.delete<boolean>(base+'Customer?username='+username);
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
       return this.http.put<NewCustomer>(base+'Customer?username='+username+'&field='+field+'&newValue='+newValue,"");
    }




}
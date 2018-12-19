import { Injectable } from '@angular/core';
import { Payment } from '../models/Payment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getpayments(): Observable<any> {
    console.log("Entrata in getpayments");
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    return this.http.get<any>('http://localhost:58708/api/paymentList?username=' + user.username)
      .pipe(tap((response) => console.log("Utente"), catchError(this.handleError("login error", {})))
      );
  }

  addPayment(quantity: number, id_slot: number, id_car: number, timeToAdd: number): Observable<number> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    //payment and stop id are autoincrement, we pass 0, backend will fix
    var payment: Payment = new Payment(0, quantity, 0, user.username, id_slot, id_car, timeToAdd);
    return this.http.post<number>('http://localhost:58708/api/addPayment', payment)
      .pipe(tap((response) => console.log("addPayment"), catchError(this.handleError("login error", {})))
      );
  }


  executePayment(paymentToken: string, price: number): Observable<any> {
    console.log("ENTRATA NEL SERVICE, IL TOKEN è: " + paymentToken);

    const fd = new FormData();
    fd.append('token', paymentToken);
    fd.append('amount', "" + price);

    return this.http.post<any>('http://localhost:58708/api/executePayment', fd)
      .pipe(tap((response) => console.log("addAmount"), catchError(this.handleError("addAmount error", {})))
      );
  }

  getwallet(): Observable<any> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    var username: string = user.username;
    return this.http.get<any>('http://localhost:58708/api/getWallet?username=' + username)
      .pipe(tap((response) => console.log("wallet recuperato"), catchError(this.handleError("wallet error", {})))
      );
  }

  modifyWallet(money: number, id: number): Observable<any> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    var username: string = user.username;

    console.log("money" +money);

    const fd = new FormData();
    fd.append('username', username);
    fd.append('money', "" + money);
    fd.append('id', "" + id);
       

    return this.http.post<any>('http://localhost:58708/api/modifyWallet', fd)
      .pipe(tap((response) => console.log("wallet aumentato"), catchError(this.handleError("addWallet error", {})))
      );
  }
}

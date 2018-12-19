import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { environment } from '../environments/environment.prod';
import { tap, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/User';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  feedback: string;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  login(username: string, password: string): Observable <User> {
    return this.http.get<User>('http://localhost:58708/api/login?username='+username+'&password='+password)
    .pipe(tap((response) => console.log("Utente"), catchError(this.handleError("login error", {})))
  );
  }

  signup(user: User): Observable <boolean> {
    return this.http.post<boolean>('http://localhost:58708/api/signupUser', user)
    .pipe(tap((response) => console.log("Utente"), catchError(this.handleError("login error", {})))
  );
  }

  changeFeedback(message: string){
    this.feedback = message;
  }

  deleteFeedback(){
    this.feedback = "";
  }
}





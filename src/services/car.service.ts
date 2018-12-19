import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { User } from "../models/User";
import { Car } from "../models/Car";
import { tap, catchError } from 'rxjs/operators';

/**
 * @description
 * @class
 */
@Injectable()
export class CarService {
  feedback: string;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  myCarsList(): Observable<any>{
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    return this.http.get<any>('http://localhost:58708/api/myCarsList?username='+user.username)
    .pipe(tap((response) => console.log("CarList"), catchError(this.handleError("report error", {})))
  );
  }

  deleteCar(id: number): Observable<any>{
    return this.http.delete<boolean>('http://localhost:58708/api/removeCar?id='+id)
    .pipe(tap((response) => console.log("DeleteCar"), catchError(this.handleError("report error", {})))
  );
  }

  addNewCar(license_plate: string, name: string): any{
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    var car = new Car(0, license_plate, name, user.username);
    return this.http.post<any>('http://localhost:58708/api/addCar', car)
    .pipe(tap((response) => console.log("addNewCar"), catchError(this.handleError("report error", {})))
  );
  }

  changeFeedback(message: string){
    this.feedback = message;
  }

  deleteFeedback(){
    this.feedback = "";
  }

}

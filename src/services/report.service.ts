import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { tap, catchError } from 'rxjs/operators';
import { Report } from '../models/Report';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  // passo lat/lng dal report-driver component
  sendReport(description: string, type: string, latitude: number, longitude: number, selectedFile: File): Observable <number> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    //var mediaBytes: byte[];
    
    var report: Report = new Report(+type,description,"19/07/2018",user.username,"",latitude,longitude);

    const fd = new FormData();
    if(selectedFile) fd.append('image',selectedFile,selectedFile.name);
    fd.append('report', JSON.stringify(report));

    console.log("username: "+ user.username);
    console.log("lat al service : "+ report.latitude);
    console.log("long al service : "+ report.longitude);
    return this.http.post<number>('http://localhost:58708/api/addReport', fd)
    .pipe(tap((response) => console.log("Added Report"), catchError(this.handleError("report error", {})))
  );}

  onOpenHystory(): Observable <Array<Report>> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    return this.http.get<Array<Report>>('http://localhost:58708/api/reportHystory?username=' + user.username)
    .pipe(tap((response) => console.log("Retrieved My Report List"), catchError(this.handleError("report error", {})))
  );}

  onOpenNear(lat: number, lng: number): Observable <Array<Report>> {
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    console.log("lat al service : "+ lat);
    console.log("long al service : "+ lng);
    return this.http.get<Array<Report>>('http://localhost:58708/api/getNearReport?type='+ user.type + '&lat=' + lat + '&lng=' + lng)
    .pipe(tap((response) => console.log("Retrieved Near Report List"), catchError(this.handleError("report error", {})))
  );}
}

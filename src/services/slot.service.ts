import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, tap } from '../../node_modules/rxjs/operators';
import { User } from '../models/User';
import { Slot } from '../models/Slot';
import { Master } from '../models/Master';
import { Slave } from '../models/Slave';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable()
export class SlotService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  //ADD METHODS

  //returns the added slot
  addSlot(latitude: number, longitude: number, price: number, address: string, type: number): Observable<Slot>{
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    var slot: Slot = new Slot(0,0,0,latitude,longitude,address,price,type,user.username);
    return this.http.post<Slot>('http://localhost:58708/api/addSlot', slot)
    .pipe(tap((response) => console.log("AddedSlot"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the added master
  addMaster(id: string, id_slot: number): Observable<Master>{
    var master: Master = new Master(id,id_slot);
    return this.http.post<Master>('http://localhost:58708/api/addMaster', master)
    .pipe(tap((response) => console.log("AddedMaster"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the added slave
  addSlave(id: string, state: number, id_master: string): Observable<Slave>{
    var slave: Slave = new Slave(id,state,id_master);
    return this.http.post<Slave>('http://localhost:58708/api/addSlave', slave)
    .pipe(tap((response) => console.log("AddedSlave"), catchError(this.handleError("report error", {})))
  );
  }

  //DELETE METHODS

  //returns the id of deleted slot
  deleteSlot(id: number): Observable<number>{
    return this.http.delete<number>('http://localhost:58708/api/deleteSlot?id='+id)
    .pipe(tap((response) => console.log("DeletedSlot"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the id of deleted master
  deleteMaster(id: string): Observable<string>{
    return this.http.delete<string>('http://localhost:58708/api/deleteMaster?id='+id)
    .pipe(tap((response) => console.log("DeletedMaster"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the id of deleted slave
  deleteSlave(id: string): Observable<string>{
    return this.http.delete<string>('http://localhost:58708/api/deleteSlave?id='+id)
    .pipe(tap((response) => console.log("DeletedSlave"), catchError(this.handleError("report error", {})))
  );
  }

  //UPDATE METHODS

  //returns the updated slot
  updateSlot(id: number, latitude: number, longitude: number, price: number, address: string, type: number): Observable<Slot>{
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    var slot: Slot = new Slot(id,0,0,latitude,longitude,address,price,type,user.username);
    return this.http.put<Slot>('http://localhost:58708/api/updateSlot', slot)
    .pipe(tap((response) => console.log("UpdatedSlot"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the updated master
  updateMaster(id: string, id_slot: number): Observable<Master>{
    var master: Master = new Master(id,id_slot);
    return this.http.put<Master>('http://localhost:58708/api/updateMaster', master)
    .pipe(tap((response) => console.log("UpdatedMaster"), catchError(this.handleError("report error", {})))
  );
  }

  //returns the updated slave
  updateSlave(id: string, state: number, id_master: string): Observable<Slave>{
    var slave: Slave = new Slave(id,state,id_master);
    return this.http.put<Slave>('http://localhost:58708/api/updateSlave', slave)
    .pipe(tap((response) => console.log("UpdatedSlave"), catchError(this.handleError("report error", {})))
  );
  }

  //GET METHODS
  
  getSlots(): Observable<Array<Slot>>{
    var user: User = JSON.parse(sessionStorage.getItem("user"));
    return this.http.get<Array<Slot>>('http://localhost:58708/api/getSlots?username=' + user.username)
    .pipe(tap((response) => console.log("Retrieved My Slot List"), catchError(this.handleError("report error", {})))
  );
  }

  getMasters(id_slot: number): Observable<Array<Master>>{
    return this.http.get<Array<Master>>('http://localhost:58708/api/getMasters?id_slot=' + id_slot)
    .pipe(tap((response) => console.log("Retrieved My Master List"), catchError(this.handleError("report error", {})))
  );
  }

  getSlaves(id_master: string): Observable<Array<Slave>>{
    return this.http.get<Array<Slave>>('http://localhost:58708/api/getSlaves?id_master=' + id_master)
    .pipe(tap((response) => console.log("Retrieved My Slave List"), catchError(this.handleError("report error", {})))
  );
  }


}

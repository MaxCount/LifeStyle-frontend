import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {userModel} from "./user-model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  listOfUsers(): Observable<Array<userModel>> {
    return this.http.get<Array<userModel>>('http://localhost:8080/api/admin-page/getUsers');
  }

  // public updateUser(user: userModel): Observable<userModel>{
  //   return this.http.put<userModel>(`http://localhost:8080/api/admin-page/employee/update`, employee)
  // }
  // public deleteUser(userId: number): Observable<void> {
  //   return this.http.delete<void>('http://localhost:8080/api/admin-page/deleteUser/' + userId);
  // }
}

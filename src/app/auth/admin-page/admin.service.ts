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

  public setAdmin(username: string): Observable<void>{
    return this.http.post<void>('http://localhost:8080/api/admin-page/set-admin-role/' + username, null)
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/api/admin-page/deleteUser/' + userId);
  }
  public deletePost(postName: String): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/api/admin-page/deletePost/' + postName);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  // registerSuccess(token: string): Observable<any> {
  //   return this.http.get<any>(API_URL + '/confirm-account?token=' + token);
  // }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/login', user);
  }
  matchPassword(user:User) :Observable<User> {
    return this.http.post<User>(API_URL + '/matchPassword', user);
  }
  // newPassword(user: User, id: number): Observable<User> {
  //   return this.http.put<User>(API_URL + `/new-password/${id}`, user);
  // }
  //
  userDetail(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }
  //
  getUserProfile(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  updateUserProfile(id: number, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}`, user);
  }
  // deleteUser(id: string){
  //   return this.http.delete<User>(API_URL + `/delete?id=`+ `${id}`);
  // }
}

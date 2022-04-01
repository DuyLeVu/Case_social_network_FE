import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {UserToken} from "../model/user-token";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
import {JWTResponse} from "../model/JWTResponse";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(user : User):Observable<JWTResponse> {
    return this.http.post<JWTResponse>(API_URL + '/login', user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../environments/environment';
import jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';


import User from './User';
import RegisterUser from './RegisterUser';
// import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor( private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem("access_token")!;
  }

  readToken(): User {
    return this.helper.decodeToken(localStorage.getItem("access_token")!)
  }

  isAuthenticated(): boolean {
    if(localStorage.getItem("access_token"))return true
    return false;
  }

  login(user: User): Observable<any>{
    return this.http.post(environment.userAPIBase + "/login/", user)
  } 

  logout(): void {
    localStorage.removeItem("access_token")
  }

  register(registerUser: RegisterUser): Observable<any>{
    return this.http.post(environment.userAPIBase + "/register/", registerUser)
  } 



























}
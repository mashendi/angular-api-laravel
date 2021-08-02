import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'http://localhost:8000/api/';
  isLoggedIn:boolean  = false;

  constructor(private httpClient: HttpClient) {}

  checkCookie() {
    return this.httpClient.get('http://localhost:8000/sanctum/csrf-cookie');
  }

  login(cred: any) {
    return this.httpClient.post(this.baseURL + 'login', cred, {
      withCredentials: true,
    });
  }

  register(user: any) {
    return this.httpClient.post(this.baseURL + 'register', user);
  }

  logout(){
    return this.httpClient.post(this.baseURL + "logout", {}, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}')
    })});
  }
}

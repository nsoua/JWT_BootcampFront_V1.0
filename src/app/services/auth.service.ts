import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:81/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(AUTH_API + 'signin', {username, password}, httpOptions).pipe
    (map(
        (userData) => {
          console.log("userData :" + userData);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          console.log(username + " " + password);
          
          return userData;
        }
      )
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')

    //console.log(!(user === null))
    return !(user === null)

  }


}

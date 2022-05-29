import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    console.log(username + ':' + password);

    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    const headers = new HttpHeaders({Authorization : 'Basic '+btoa(username + ':' + password)});
    console.log(btoa(username + ':' + password));
    //return this.httpClient.get("http://127.0.0.1:81/basicauth",{headers}).pipe
    // return this.Http.get(this.urlProviders + '/list');
    return this.httpClient.post<any>("http://127.0.0.1:81/auth/signin", { username, password }).pipe
      (map(
          (userData) => {
            console.log("userData :" + userData);
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            console.log(username + " " + password);
            //let authString = 'Basic ' + btoa(username + ':' + password);
            //sessionStorage.setItem('basicauth', authString);

            return userData;
          }
        )
      );
    /*if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.clear;
  }
}

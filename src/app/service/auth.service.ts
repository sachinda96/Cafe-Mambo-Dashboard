import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

const AUTH_API = 'http://yjv1g.mocklab.io/api/auth/';
//'http:localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const httpOptionLogin = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text',
};
//import baseURl
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      BASE_URL + '/login',
      {
        email,
        password,
      },

      httpOptions
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      BASE_URL + '/user/registration',
      {
        name,
        email,
        password,
      },
      httpOptions
    );
  }

  authorizationHeaders():HttpHeaders{
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    httpHeaders = httpHeaders.set("Authorization", "Bearer "+sessionStorage.getItem("token")+"");

    return httpHeaders;
  }
}

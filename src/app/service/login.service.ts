import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../model/login";
import {MAIN} from "./order.service";
import {Observable} from "rxjs";
import {Token} from "../model/token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(login: Login): Observable<Token> {
   return this.http.post<Token>(MAIN+"/login",login);

  }

}

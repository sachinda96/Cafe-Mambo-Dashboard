import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Login} from "../model/login";
import {Router} from "@angular/router";
import {Token} from "../model/token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login = new Login();
  token:Token = new Token();
  errortext: any;

  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.loginService.login(this.login).subscribe(
      res=>{
        this.token = res;
        sessionStorage.setItem("token",this.token.token)
        sessionStorage.setItem("user",this.token.userId)
        sessionStorage.setItem("role",this.token.role)
        sessionStorage.setItem("name",this.token.name)
        this.route.navigate(['nav']);
      },error => {
        console.log(error)
        this.errortext =  "*"+error.error;
      }
    );
    // [routerLink]="['nav']"
  }
}

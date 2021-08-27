import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name: any;
  role:any;
  isTest:boolean = false;

  constructor(private route:Router) {

  }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("name")
    this.role = sessionStorage.getItem("role")
   // this.getAll();
  }

  logOut() {
    sessionStorage.clear()
    this.route.navigate(['']);
  }

  getAll(){

    if(this.isTest == false){
      this.isTest= true;
      window.location.reload();
    }

  }
}

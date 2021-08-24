import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("name")
  }

  logOut() {
    sessionStorage.clear()
    this.route.navigate(['']);
  }
}

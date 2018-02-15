import { Component } from '@angular/core';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  currentUser : string;
  isAuthenticated = false;
  env: string;

  ngOnInit()
  {
    this.env = environment.production ? "PROD" : "DEV";
  }

  login() {
    this.currentUser = 'User';
    this.isAuthenticated = true;
  }

  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
  }}

/*********************************************************************************
*  WEB422 – Assignment 05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Santiago Arias  Student ID: sarias-jaramillo Date: 25/03/2022
*
********************************************************************************/ 

import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a4';
  searchString: string = "";
  token: any = "";
  
  constructor(private router: Router, private auth: AuthService ) {}

  ngOnInit(): void {
    this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.token = this.auth.readToken()
        }
      });
  }

  handleSearch(): void {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

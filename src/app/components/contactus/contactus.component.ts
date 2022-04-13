import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  userContactUsData = {email: "", name: "", textArea: ""}
  error: String = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.error = "";
  }

  contactUsUser() {
    if (!this.userContactUsData.email || !this.userContactUsData.name || !this.userContactUsData.textArea ){
      this.error = "empty fields" 
    }else {
      this.userContactUsData.email = ""
    }
      
  }
}

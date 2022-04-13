import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginData = {email: "", password: ""}
  error: String = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.error = "";
  }

  loginUser() {
    console.log(this.userLoginData)
    if (!/^[a-zA-Z]+$/.test(this.userLoginData.email) || !/^[a-zA-Z]+$/.test( this.userLoginData.password )){
      this.error = "only letters";
    }else{
      this.router.navigate(['/contactus']);

    }
      
  }

}

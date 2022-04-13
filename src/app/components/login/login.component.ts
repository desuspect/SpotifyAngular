import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import User from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {userName: "", password: "", _id: ""};
  warning: String = "";
  loading: Boolean = false; 
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.user.userName && this.user.password) {
      this.loading = true;
      this.auth.login(this.user)
      .subscribe(
        {
          next: (data) => { 
            console.log(data);
            this.warning = "";
            this.loading = false;
            localStorage.setItem("access_token", data.token)
            this.router.navigate(['/newReleases']);
            
          },
          error: (err) => {
            this.warning = err.error.message;
            this.loading = false;
          }
        }
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import RegisterUser from 'src/app/RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: RegisterUser = { userName: "", password: "", password2: "" };
  warning: String = "";
  success: boolean = false;
  loading: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerUser.userName && this.registerUser.password && this.registerUser.password2) {
      this.loading = true;
      this.auth.register(this.registerUser)
        .subscribe(
          {
            next: (data) => { 
              console.log(data);
              this.warning = "";
              this.success =  true;
              this.loading = false;
              
            },
            error: (err) => {
              this.warning = err.error.message;
              this.success =  false;
              this.loading = false;
              
            }
          }
        );
    }
  }
  
}




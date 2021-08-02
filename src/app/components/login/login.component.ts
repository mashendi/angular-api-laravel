import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  data:any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    return this.userService.checkCookie().subscribe((res) => {
      this.userService
        .login({ email: this.email, password: this.password })
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          localStorage.setItem("token", JSON.stringify(this.data.token));
          this.userService.isLoggedIn=true;
          this.router.navigate(['/']);
        });
    });
  }
}

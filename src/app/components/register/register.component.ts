import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  user: any;
  data :any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.user = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
    };
    console.log(this.user);
    return this.userService.register(this.user).subscribe((res) => {
      this.data = res;
          localStorage.setItem("token", JSON.stringify(this.data.token));
          this.userService.isLoggedIn = true;
          this.router.navigate(['']);
    });
  }
}

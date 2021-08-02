import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean;

  constructor(private userService:  UserService, private router:Router) { 
    this.loggedIn = this.userService.isLoggedIn;
  }
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.loggedIn = true
    }
  }

  

  logout() {
    return this.userService.logout().subscribe(res => {
      console.log(res);
      localStorage.removeItem('token');
      this.userService.isLoggedIn = false;
      
    })
  }

}

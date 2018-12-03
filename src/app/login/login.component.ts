import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }
  // constructor() { }

  
username: string;
password: string;


  ngOnInit() {
  }

  login() : void {
    if(this.username == 'sam@gmail.com' && this.password == 'ilikecoffee'){
      console.log(this.username, this.password);
     this.router.navigate(["loggedin"]);
    }else {
      alert("Invalid credentials!");
    }
  }
  }



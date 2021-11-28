import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';


  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Given username was : ' + this.userName);
    console.log('given password was : ' + this.password);
  }

}

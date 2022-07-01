import { Component, OnInit } from '@angular/core';
import { Login } from '../login-form.component.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model: Login = new Login("", "");

  message = "";

  onSubmit(): void {
    this.message = "The login is valid";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

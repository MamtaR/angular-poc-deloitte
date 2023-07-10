import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUser: any[] = [];
  
  signupObj: any = {
    name: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
  onSignup(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
    this.signupObj = {
      name: '',
      email: '',
      password: ''
    };
  }
}

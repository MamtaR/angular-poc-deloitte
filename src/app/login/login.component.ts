import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginUser: any[] = [];
  
  loginObj: any = {
    name: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser');
    if (localData != null) {
      this.signupUser = JSON.parse(localData);
    }
  }
  onLogin(){
    const isUserExist = this.signupUser.find((m: { name: any; password: any; }) => m.name == this.loginObj.name && m.password == this.loginObj.password);

    if(isUserExist != undefined){
      alert("User logged in successfully");
    }
    else{
      alert("Wrong username or password");
    }
  }
}

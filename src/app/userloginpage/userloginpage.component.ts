import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private Auth: AuthService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    
  }

  loginUser(event: any) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username,password)
    console.log(username, password)
    //console.log(event)
     
  }
  // username: string;
  // password: string;

  // constructor() {
  //   this.username = '';
  //   this.password = '';
  // }

  // onSubmit() {
  //   console.log('Username: ' + this.username);
  //   console.log('Password: ' + this.password);
   
  // }
}

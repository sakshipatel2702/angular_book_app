import { Component } from '@angular/core';


@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
   
  }
}

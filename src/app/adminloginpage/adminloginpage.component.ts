import { Component } from '@angular/core';

@Component({
  selector: 'app-adminloginpage',
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css']
})
export class AdminloginpageComponent {
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

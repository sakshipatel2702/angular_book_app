import { Component } from '@angular/core';

@Component({
  selector: 'app-userregisterpage',
  templateUrl: './userregisterpage.component.html',
  styleUrls: ['./userregisterpage.component.css']
})
export class UserregisterpageComponent {
  username: string;
  password: string;
  contact: string;
  birthdate: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.contact = '';
    this.birthdate = '';
  }

  onSubmit() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    console.log('Contact: ' + this.contact);
    console.log('Birthdate: ' + this.birthdate);
  }
}

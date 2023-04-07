import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userregisterpage',
  templateUrl: './userregisterpage.component.html',
  styleUrls: ['./userregisterpage.component.css']
})
export class UserregisterpageComponent {

  username: string="";
  password: string="";
  contact: string="";
  birthdate: string="";

  constructor(private http: HttpClient){
    
  }

  onSubmit(){
    let bodyData = {
      "username" : this.username,
      "password": this.password,
      "contact": this.contact,
      "birthdate": this.birthdate
    };
    this.http.post("http://localhost:5000/user/create", bodyData, {responseType: 'text'}).subscribe((resultData: any) =>{
      console.log(resultData);
      alert("Registered Sucessfully");

      this.username = '';
      this.password = '';
      this.contact = '';
      this.birthdate = '';
    })
  }

  // username: string;
  // password: string;
  // contact: string;
  // birthdate: string;

  // constructor() {
  //   this.username = '';
  //   this.password = '';
  //   this.contact = '';
  //   this.birthdate = '';
  // }

  // onSubmit() {
  //   console.log('Username: ' + this.username);
  //   console.log('Password: ' + this.password);
  //   console.log('Contact: ' + this.contact);
  //   console.log('Birthdate: ' + this.birthdate);
  // }
}

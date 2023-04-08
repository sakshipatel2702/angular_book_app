import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent implements OnInit {
  username: string="";
  password: string="";
  //isLogin: boolean = true;
  //errorMessage: string = "";

  // constructor(private router: Router, private http: HttpClient) {
    
  // }

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    
  }

  loginUser() {
   console.log(this.username);
   console.log(this.password);

   let bodyData = {
    username : this.username,
    password : this.password,
   };

   this.http.post("http://localhost:5000/user/login", bodyData).subscribe((resultData: any) =>{
    console.log(resultData);

    if(resultData.status){
      alert("correct credentials!");
    }else{
      alert("Incorrect credentials!");
      console.log("Error Logging In!");
    }
   });
     
  }
  // loginUser(event: any) {
  //   event.preventDefault()
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#password').value
  //   this.Auth.getUserDetails(username,password)
  //   console.log(username, password)
  //   //console.log(event)
     
  // }
  
}

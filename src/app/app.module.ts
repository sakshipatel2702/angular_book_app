import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { UserregisterpageComponent } from './userregisterpage/userregisterpage.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginpageComponent,
    AdminloginpageComponent,
    UserregisterpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserloginpageComponent
      },
      {
        path: 'adminloginpage',
        component: AdminloginpageComponent
      },
      {
        path: 'userregisterpage',
        component: UserregisterpageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

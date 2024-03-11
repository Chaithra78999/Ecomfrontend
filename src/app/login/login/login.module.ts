import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports : [LoginComponent,
  ReactiveFormsModule,
FormsModule]
})
export class LoginModule { }

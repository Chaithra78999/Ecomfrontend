import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RegisterComponent
  ],
  exports : [RegisterComponent,
  RegisterComponent],

  providers : [HttpClientModule]
})
export class RegisterModeuleModule { }

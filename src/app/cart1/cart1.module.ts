import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart1Component } from './cart1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Cart1Component,
    RouterModule
  ],
  exports : [Cart1Component,
  RouterModule]
})
export class Cart1Module { }

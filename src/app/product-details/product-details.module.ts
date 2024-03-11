import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductDetailsComponent,
    RouterModule,
  ],
  exports : [
    ProductDetailsComponent,
    RouterModule
  ]
})
export class ProductDetailsModule { }

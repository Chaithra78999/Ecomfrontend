import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ActivatedRoute, RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports : [
    ProductComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class ProductsModule { }

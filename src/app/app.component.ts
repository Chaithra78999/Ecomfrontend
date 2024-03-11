import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";


import { ProductComponent } from './products/products.component';

import { ProductsComponent } from './products/products.component.spec';
import { MainComponent } from './main/main.component';
import { Cart1Component } from './cart1/cart1.component';
import { ChaithraComponent } from './chaithra/chaithra.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddtocartComponent } from './addtocart/addtocart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    RegisterComponent,
    HttpClientModule,
    CommonModule,
    LoginComponent,
  ChaithraComponent,
    ProductsComponent,
    ProductComponent,
    MainComponent,
Cart1Component,
AddcartComponent,
ProductDetailsComponent,
AddtocartComponent
  ]

  
})
export class AppComponent {
  title = 'myapp';
}

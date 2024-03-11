import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { ProductsComponent } from './products/products.component.spec';

import { MainComponent } from './main/main.component';
import { Cart1Component } from './cart1/cart1.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductsComponent },
    { path: 'cart', component: Cart1Component, },
    {path : 'productDetails' , component : ProductDetailsComponent},
    { path: 'addtocart/ : productId', component: AddtocartComponent },
    { path: 'addtocart', component: AddtocartComponent },

    { path: 'addcart/ : productId', component: AddcartComponent },
    { path: 'addcart', component: AddcartComponent }




];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes { };

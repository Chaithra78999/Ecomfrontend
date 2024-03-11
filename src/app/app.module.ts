import { NgModule, importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterModeuleModule } from "./register/register-modeule/register-modeule.module";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LoginModule } from "./login/login/login.module";
import { ToastrModule } from "ngx-toastr";
import { ɵBrowserAnimationBuilder } from "@angular/animations";
import { ProductComponent } from "./products/products.component";
import { customeInterceptor } from "./custome.interceptor";

import { ProductsComponent } from "./products/products.component.spec";

import { CommonModule, CurrencyPipe } from "@angular/common";
import { MainModule } from "./main/main.module";
import { MainComponent } from "./main/main.component";
import { AppRoutes } from "./app.routes";
import { Cart1Module } from "./cart1/cart1.module";
import { Cart1Component } from "./cart1/cart1.component";

import { AddcartComponent } from "./addcart/addcart.component";
import { ChaithraComponent } from "./chaithra/chaithra.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetailsModule } from "./product-details/product-details.module";
import { AddtocartModule } from "./addtocart/addtocart.module";
import { AddtocartComponent } from "./addtocart/addtocart.component";


@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        MainComponent,
        LoginComponent,
        RegisterComponent,
        Cart1Component,
     
        AddcartComponent,
        ChaithraComponent,
        ProductDetailsComponent,
        AddtocartComponent
    ],


    imports: [
        AppRoutes,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RegisterModeuleModule,
        RouterModule,
        LoginModule,
        ToastrModule,
        ProductComponent,
        ProductsComponent,
        CommonModule,
        MainModule,
        Cart1Module,
        ProductDetailsModule,
        AddtocartModule,
        AddcartComponent,
       

    ],

    exports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RegisterModeuleModule,
        LoginModule,
        ToastrModule,
        ProductComponent,
        ProductsComponent,
        MainModule,
        RouterModule,
        Cart1Module,
        ProductDetailsModule,
        AddtocartModule,
        AddcartComponent,
      
    ],

    providers: [
        HttpClientModule,
        importProvidersFrom(HttpClientModule),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: customeInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
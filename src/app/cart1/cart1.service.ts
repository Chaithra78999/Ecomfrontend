import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product-model';

@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

  private apiUrl = 'http://localhost:9090/getAllProducts';
  cart: any;

  constructor(private http: HttpClient) {}

  // Fetch all products from the backend
  getProducts(): Observable<any> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }
  add(product:Product)
  {
    
    this.cart.push(product);
    console.log(product);
  }

}

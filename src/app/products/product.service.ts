// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-model';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:9090/getAllProducts';

  constructor(private http: HttpClient) {}

  // Fetch all products from the backend
  getProducts(): Observable<any> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  // Add more methods as needed, e.g., fetchProductById, addProduct, updateProduct, deleteProduct, etc.
}

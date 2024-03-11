import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {


  url = "http://localhost:9090/getAllProducts";

  constructor(private http : HttpClient) { }

  getProductDetails() : Observable <any> {
    return this.http.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addcart } from './addcart';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

url = "http://localhost:9090/getAllProducts"

  constructor(private http : HttpClient) { }

  getvalue(productId : any) : Observable<any> {
    return this.http.get(`${this.url} `)
  }

  getdel (addcart : Addcart, productId : any){
    return this.http.get("http://localhost:9090/getAllProducts" + productId );
  }
}

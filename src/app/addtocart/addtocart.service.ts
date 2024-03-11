import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  url = "http://localhost:9090/getAllProducts";

  constructor( private http : HttpClient) { }

  getsingleproduct(productId : number ) : Observable<any> {
    return this.http.get(`${this.url}/${productId}`)
  }

}

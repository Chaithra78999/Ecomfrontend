import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterClass } from './register-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  

  url = "http://localhost:9090/registerNewUser" ;
  
 
  constructor(private http: HttpClient) { } 

   file(reg : RegisterClass) : Observable<Object> {
     return this.http.post(`${this.url}`, reg, {responseType : 'text'});
  }


  
}

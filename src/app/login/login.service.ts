import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:9090/authenticate"

  constructor(private http : HttpClient) { }

logs(loginclass : Login) : Observable<Object> {
  return this.http.post(`${this.url}`, loginclass, {responseType : "text"})
}

}

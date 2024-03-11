import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class customeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add authentication token to the request headers here
    const token=localStorage.getItem('loginTOken')
const newCloneRequest =request.clone({
  setHeaders:{
    Authorization :'Bearer ${token}'
  }
})
    return next.handle(newCloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle 401 Unauthorized error here (e.g., redirect to login page)
        }
        return throwError(error);
      })
    );
  }
}

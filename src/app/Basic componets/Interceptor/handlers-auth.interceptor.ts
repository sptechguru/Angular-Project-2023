import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HandlersAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const API_KEY = "AP$%^*%^569";
    const ROLE_KEY = "ROLE$%^*%^569";
    return next.handle(request);
    // return next.handle(request.clone(setheaders:{API_KEY,ROLE_KEY}));
  }
}

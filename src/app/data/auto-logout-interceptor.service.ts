import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutInterceptorService implements HttpInterceptor{

  lastRequestDate:Date;
  
  constructor() { 
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.lastRequestDate=new Date();
    
    return next.handle(req);
  }
}

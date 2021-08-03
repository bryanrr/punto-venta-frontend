import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutInterceptorService implements HttpInterceptor{

  private lastRequestDate:Date;
  private maxInactivityTime:number=1000*60*30;
  private period:number=1000*60*5;
  private initialDelay:number=1000*60*30;
  
  constructor(private loginService:LoginService,private router:Router) { 
    timer(this.initialDelay,this.period)
    .subscribe(data=>{
      if(this.loginService.$isLoggedIn && (( new Date().getTime()- this.lastRequestDate.getTime() ) >= this.maxInactivityTime)){
        loginService.logout().
          subscribe(data=>{
            this.router.navigateByUrl('/login');
          });
      }
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.lastRequestDate=new Date();
    
    return next.handle(req);
  }
}

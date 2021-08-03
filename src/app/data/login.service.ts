import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn:boolean=false;
  
  constructor(private httpClient:HttpClient, private router:Router) { 
  }

  authenticate(values,submitResult:BehaviorSubject<string>):void{
      let authRequest:any={
        "username": values.get('username').value,
        "password": values.get('password').value
      };
      this.httpClient.post<string>(environment.apiUrl+'authenticate',authRequest,{responseType:'text' as 'json'})
      .subscribe(data=>{
        this.isLoggedIn=true;
        this.router.navigate(['/main']);
      },error=>{
        if(error.status=="401"){
          submitResult.next('incorrect');  
          values.controls['username'].setValue('');
          values.controls['password'].setValue('');
        }else{
          submitResult.next('error');
          values.controls['username'].setValue('');
          values.controls['password'].setValue('');
        }
      });
  }

  logout():Observable<Object>{
    this.isLoggedIn=false;
    return this.httpClient.post<string>(environment.apiUrl + 'logout', { responseType: 'text' as 'json' });    
  }
  
	public get $isLoggedIn(): boolean {
		return this.isLoggedIn;
	}
  
}

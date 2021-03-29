import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient:HttpClient) { 
  }

  authenticate(username:string,password:string):Observable<string>{
      let authRequest:any={
        "username": username,
        "password": password
      };
      return this.httpClient.post<string>(environment.apiUrl+'authenticate',authRequest,{responseType:'text' as 'json'});
  } 
}

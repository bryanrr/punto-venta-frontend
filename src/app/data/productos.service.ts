import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private httpClient:HttpClient) { }

  getProductDetails(code:string,producto:Subject<Object>):void{
    this.httpClient.get<string>(environment.apiUrl+'producto/'+code,{responseType:'text' as 'json'})
      .subscribe(data=>{
        producto.next(JSON.parse(data)); 
      },error=>{
        
      });
  }
}



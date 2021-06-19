import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private httpClient:HttpClient,private router:Router) { }

  getProductDetails(code:string,producto:Subject<Object>):void{
    this.httpClient.get<string>(environment.apiUrl+'producto/'+code,{responseType:'text' as 'json'})
      .subscribe(data=>{
        producto.next(JSON.parse(data)); 
      },error=>{
        
      });
  }

  updateProduct(formGroup:FormGroup,product:Object,submitResult:BehaviorSubject<string>):void{
    if(formGroup.controls["codigobarra"].value==product["codigobarra"]){
      if(formGroup.controls["descripcion"].value!=product["descripcion"] || formGroup.controls["preciocompra"].value!=product["preciocompra"] || formGroup.controls["precioventa"].value!=product["precioventa"]){
        product["descripcion"]=formGroup.controls["descripcion"].value;
        product["preciocompra"]=formGroup.controls["preciocompra"].value;
        product["precioventa"]=formGroup.controls["precioventa"].value;
        this.httpClient.put<Object>(environment.apiUrl+'producto/update', product).subscribe(data=>{
          this.router.navigate(['/main/buscar/codigo']);
        },error=>{
          submitResult.next("error");     
        });
      }
    }
  }
}



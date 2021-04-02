import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private codigo:string;
  productObservable:Subject<Object>=new Subject();
  product:Object;
  myForm:FormGroup;
  
  constructor(private route:ActivatedRoute,private productosService:ProductosService,private fb:FormBuilder) {
    route.params.subscribe(params=>this.codigo=params['code']);
    this.productosService.getProductDetails(this.codigo,this.productObservable);
    this.productObservable.subscribe(data=>{
      this.product=data;
      this.myForm=this.fb.group({
        'codigobarra':this.product['codigobarra'],
        'descripcion':this.product['descripcion'],
        'preciocompra':this.product['preciocompra'],
        'precioventa':this.product['precioventa']
      });
    });
  }

  onSubmit(values):void{
    
  }

	public get $codigo(): string {
		return this.codigo;
	}

  ngOnInit(): void {
    
  }

}

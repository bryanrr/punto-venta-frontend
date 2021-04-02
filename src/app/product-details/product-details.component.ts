import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import * as numeral from 'numeral';

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
  private readonlyCompra:boolean=true;
  private readonlyVenta:boolean=true;
  private readonlyDescription:boolean=true;
  
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

  getPorcentaje(formGroup):string{
    if(isNaN(formGroup.get('preciocompra').value+1) || isNaN(formGroup.get('precioventa').value+1)){
      return "ERROR";
    }else{
      return numeral((formGroup.get('precioventa').value-formGroup.get('preciocompra').value)/formGroup.get('preciocompra').value).format('0.00%');
    }
  }

  onSubmit(values):void{
    
  }

	public get $codigo(): string {
		return this.codigo;
	}

	public get $readonlyCompra(): boolean {
		return this.readonlyCompra;
	}

	public set $readonlyCompra(value: boolean) {
		this.readonlyCompra = value;
	}

	public get $readonlyVenta(): boolean {
		return this.readonlyVenta;
	}

	public set $readonlyVenta(value: boolean) {
		this.readonlyVenta = value;
	}

	public get $readonlyDescription(): boolean {
		return this.readonlyDescription;
	}

	public set $readonlyDescription(value: boolean) {
		this.readonlyDescription = value;
	}

  ngOnInit(): void {
    
  }

}

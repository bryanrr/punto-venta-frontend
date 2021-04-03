import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import * as numeral from 'numeral';
import { ValidatorsService } from '../data/validators.service';

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
  barcodeError:BehaviorSubject<string>=new BehaviorSubject('');
  descriptionError:BehaviorSubject<string>=new BehaviorSubject('');
  purchasePriceError:BehaviorSubject<string>=new BehaviorSubject('');
  sellingPriceError:BehaviorSubject<string>=new BehaviorSubject('');
  
  constructor(private route:ActivatedRoute,private productosService:ProductosService,private fb:FormBuilder,private validatorService:ValidatorsService) {
    route.params.subscribe(params=>this.codigo=params['code']);
    this.productosService.getProductDetails(this.codigo,this.productObservable);
    this.productObservable.subscribe(data=>{
      this.product=data;
      this.myForm=this.fb.group({
        'codigobarra':[this.product['codigobarra'],Validators.compose([Validators.required,validatorService.barcodeValidator])],
        'descripcion':[this.product['descripcion'],Validators.compose([Validators.required,validatorService.coincidencesValidator])],
        'preciocompra':[this.product['preciocompra'],Validators.compose([Validators.required,validatorService.priceValidator])],
        'precioventa':[this.product['precioventa'],Validators.compose([Validators.required,validatorService.priceValidator])]
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
      let validForm=false;

      validForm=this.validatorService.validFormControl(this.myForm.controls["codigobarra"],this.barcodeError);
      validForm=this.validatorService.validFormControl(this.myForm.controls["descripcion"],this.descriptionError);
      validForm=this.validatorService.validFormControl(this.myForm.controls["preciocompra"],this.purchasePriceError);
      validForm=this.validatorService.validFormControl(this.myForm.controls["precioventa"],this.sellingPriceError);

      if(validForm){

      }
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';
import { ValidatorsService } from '../data/validators.service';

@Component({
  selector: 'app-sold-pieces',
  templateUrl: './sold-pieces.component.html',
  styleUrls: ['./sold-pieces.component.css']
})
export class SoldPiecesComponent implements OnInit {

  soldPiecesForm:FormGroup;
  barcodeError:BehaviorSubject<string>=new BehaviorSubject('');
  fechaInicioError:BehaviorSubject<string>=new BehaviorSubject('');
  fechaFinError:BehaviorSubject<string>=new BehaviorSubject('');
  
  constructor(private fb:FormBuilder,private validatorService:ValidatorsService,private productosService:ProductosService) {
    this.soldPiecesForm=this.fb.group({
      'codigobarra':['',Validators.compose([Validators.required,validatorService.barcodeValidator])],
      'fechaInicio':['',Validators.required],
      'fechaFin':['',Validators.required]
    });
  }

  onSubmit(values):void{
    let validForm=false;

    validForm=(this.validatorService.validFormControl(values.controls["codigobarra"],this.barcodeError) &
        this.validatorService.validFormControl(values.controls["fechaInicio"],this.fechaInicioError) &
        this.validatorService.validFormControl(values.controls["fechaFin"],this.fechaFinError))==1?true:false;

    if(validForm){
      this.productosService.getProductSoldPeriodObservable(values.controls["codigobarra"].value,values.controls["fechaInicio"].value,values.controls["fechaFin"].value)
      .subscribe(data=>{
        
      },error=>{
        
      });
    }
  
  }

  ngOnInit(): void {
    
  }

}

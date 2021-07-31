import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';
import { ValidatorsService } from '../data/validators.service';

@Component({
  selector: 'app-sold-pieces',
  templateUrl: './sold-pieces.component.html',
  styleUrls: ['./sold-pieces.component.css']
})
export class SoldPiecesComponent implements OnInit,OnDestroy {
  codigobarra:string;
  descripcion:string;
  events:number;
  soldPiecesForm:FormGroup;
  barcodeError:BehaviorSubject<string>=new BehaviorSubject('');
  fechaInicioError:BehaviorSubject<string>=new BehaviorSubject('');
  fechaFinError:BehaviorSubject<string>=new BehaviorSubject('');
  productSoldPeriod:Subject<Object>=new Subject();
  
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
        let JSONData=JSON.parse(data);

        if(JSONData["codigobarra"]!==null){
          this.codigobarra=JSONData["codigobarra"];
          this.descripcion=JSONData["descripcion"];
          this.events=JSONData["productsoldperiod"].length;
          
          let productSoldArray=JSONData["productsoldperiod"];
          productSoldArray.sort(this.compareDate);
          this.productSoldPeriod.next(productSoldArray);
        }else{
          this.codigobarra=values.controls["codigobarra"].value;
          this.descripcion='';
          this.productSoldPeriod.next([]);
        }
      },error=>{
        
      });
    }
  
  }

  compareDate(object1:Object,object2:Object):number{
    let fecha1=new Date(object1["fechacompra"]);
    let fecha2=new Date(object2["fechacompra"]);

    return fecha1.getTime()-fecha2.getTime();
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.productSoldPeriod.unsubscribe();
    this.barcodeError.unsubscribe();
    this.fechaInicioError.unsubscribe();
    this.fechaFinError.unsubscribe();
  }

}

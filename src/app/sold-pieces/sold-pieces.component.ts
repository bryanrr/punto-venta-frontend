import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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

  constructor(private fb:FormBuilder,private validatorService:ValidatorsService) {
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
      
    }
    
  }  

  ngOnInit(): void {
    
  }

}

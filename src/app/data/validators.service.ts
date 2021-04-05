import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

const regexObjects:Object={username:/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
  password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  barcode:/^(?=.{2,30}$)(?![ ])[a-zA-Z0-9]+(?<![_.])$/,
  coincidencesProduct:/^(?=.{2,50}$)[a-zA-Z0-9 ]+(?<![_.])$/,
  price:/^[0-9]\d{0,4}(\.\d{0,2})?$/};

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  validFormControl(control:AbstractControl,subject:BehaviorSubject<string>):boolean{
    const controlErrors: ValidationErrors = control.errors;

    if(controlErrors != null){
      Object.keys(controlErrors).forEach(keyError => {
        subject.next(keyError);
      });
      return false;
    }else{
      subject.next("");
      return true;
    }
  }

  usernameValidator(control:FormControl):{[s:string]:boolean}{
    let efectiveValue=(control.value+"").trim();
    if(!efectiveValue.match(regexObjects["username"]) && efectiveValue!=""){
      return {invalidUsername:true};
    }
  }

  passwordValidator(control:FormControl):{[s:string]:boolean}{
    let efectiveValue=(control.value+"").trim();
    if(!efectiveValue.match(regexObjects["password"]) && efectiveValue!=""){
      return {invalidPassword:true};
    }
  }

  barcodeValidator(control:FormControl):{[s:string]:boolean}{
    let efectiveValue=(control.value+"").trim();
    if(!efectiveValue.match(regexObjects["barcode"]) && efectiveValue!=""){
      return {invalidCode:true};
    }
  }

  coincidencesValidator(control:FormControl):{[s:string]:boolean}{
    let efectiveValue=(control.value+"").trim();
    if(!efectiveValue.match(regexObjects["coincidencesProduct"]) && efectiveValue!=""){
      return {invalidWords:true};
    }
  }

  priceValidator(control:FormControl):{[s:string]:boolean}{
    let efectiveValue=(control.value+"").trim();
    if(!efectiveValue.match(regexObjects["price"]) && efectiveValue!=""){
      return {invalidPrice:true};
    }
  }

}

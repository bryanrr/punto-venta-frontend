import { Injectable } from '@angular/core';
import { FormControl} from '@angular/forms';

const regexObjects:Object={username:"/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/",
  password:"/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/",
  barcode:"/^(?=.{2,30}$)(?![ ])[a-zA-Z0-9]+(?<![_.])$/",
  coincidencesProduct:"/^(?=.{2,50}$)[a-zA-Z0-9 ]+(?<![_.])$/",
  price:"^[0-9]\d{0,4}(\.\d{0,2})?$"};

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  usernameValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.trim().match(regexObjects["username"])){
      return {invalidUsername:true};
    }
  }

  passwordValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.trim().match(regexObjects["password"])){
      return {invalidPassword:true};
    }
  }

  barcodeValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.trim().match(regexObjects["barcode"])){
      return {invalidCode:true};
    }
  }

  coincidencesValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.trim().match(regexObjects["coincidencesProduct"])){
      return {invalidWords:true};
    }
  }

  priceValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.trim().match(regexObjects["price"])){
      return {invalidPrice:true};
    }
  }

}

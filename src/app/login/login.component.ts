import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../data/login.service';
import { ValidatorsService } from '../data/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  usernameError:BehaviorSubject<string>=new BehaviorSubject('');
  passwordError:BehaviorSubject<string>=new BehaviorSubject('');
  submitResult:BehaviorSubject<string>=new BehaviorSubject('');
  
  constructor(private fb:FormBuilder, private loginService:LoginService,private validatorService:ValidatorsService) {
    this.loginForm=this.fb.group({
      'username':['',Validators.compose([Validators.required,this.validatorService.usernameValidator])],
      'password':['',Validators.compose([Validators.required,this.validatorService.passwordValidator])]
    });
    
  }

  submitUser(values):void{
    let validForm=false;
    
    validForm=this.validatorService.validFormControl(values.controls["username"],this.usernameError);
    validForm=this.validatorService.validFormControl(values.controls["password"],this.passwordError);

    if(validForm){
      this.loginService.authenticate(values,this.submitResult);
    }else{
      this.submitResult.next('');
      values.controls['username'].setValue('');
      values.controls['password'].setValue('');
    }
  }

  ngOnDestroy() {
    this.usernameError.unsubscribe();
    this.passwordError.unsubscribe();
    this.submitResult.unsubscribe();
  }

  ngOnInit(): void {
  }

}

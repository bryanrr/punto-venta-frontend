import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../data/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  usernameError:BehaviorSubject<string>=new BehaviorSubject('');
  passwordError:BehaviorSubject<string>=new BehaviorSubject('');
  
  constructor(private fb:FormBuilder, private loginService:LoginService) {
    this.loginForm=this.fb.group({
      'username':['',Validators.compose([Validators.required,this.usernameValidator])],
      'password':['',Validators.compose([Validators.required,this.passwordValidator])]
    });
  }

  submitUser(values):void{
    let validUsername=false;
    let validPassword=false;

    if(values.controls['username'].hasError('required')){
      this.usernameError.next('required');
    }else if(values.controls['username'].hasError('invalidUsername')){
      this.usernameError.next('invalidUsername');
    }else{
      this.usernameError.next('');
      validUsername=true;
    }

    if(values.controls['password'].hasError('required')){
      this.passwordError.next('required');
    }else if(values.controls['password'].hasError('invalidPassword')){
      this.passwordError.next('invalidPassword');
    }else{
      this.passwordError.next('');
      validPassword=true;
    }

    let resultObservable;
    resultObservable=this.loginService.authenticate(values.get('username').value,values.get('password').value);
    resultObservable.subscribe(data=>{
      
    },error=>{
      
    });
  }

  usernameValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)){
      return {invalidUsername:true};
    }
  }

  passwordValidator(control:FormControl):{[s:string]:boolean}{
    if(!control.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
      return {invalidPassword:true};
    }
  }

  ngOnInit(): void {
  }

}

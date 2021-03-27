import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../data/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private fb:FormBuilder, private loginService:LoginService) {
    this.loginForm=this.fb.group({
      'username':['',Validators.compose([Validators.required,this.usernameValidator])],
      'password':['',Validators.compose([Validators.required,this.passwordValidator])]
    });
  }

  submitUser(values):void{
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

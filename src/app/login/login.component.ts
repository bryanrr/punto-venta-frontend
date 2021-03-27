import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      'username':'',
      'password':''
    });
  }

  submitUser(values):void{
    let resultObservable;
    resultObservable=this.loginService.authenticate(values.get('username').value,values.get('password').value);
    resultObservable.subscribe(data=>{
      
    },error=>{
      
    });
  }

  ngOnInit(): void {
  }

}

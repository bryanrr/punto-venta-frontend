import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ValidatorsService } from '../data/validators.service';

@Component({
  selector: 'app-token-input',
  templateUrl: './token-input.component.html',
  styleUrls: ['./token-input.component.css']
})
export class TokenInputComponent implements OnInit {

  private action:string;
  tokenForm:FormGroup;
  submitToken:BehaviorSubject<string>=new BehaviorSubject('');

  constructor(private route:ActivatedRoute, private fb:FormBuilder,private router:Router,private validatorService:ValidatorsService) { 
    this.action=this.route.snapshot.url[1].path;
    this.tokenForm=this.fb.group({
      'token':['',Validators.compose([Validators.required,this.action=="codigo"?this.validatorService.barcodeValidator:this.validatorService.coincidencesValidator])]
    });
  }

  submitTokenForm(values):void{
    let validToken=false;
    
    if(values.controls['token'].hasError('required')){
      this.submitToken.next('required');
    }else if(values.controls['token'].hasError('invalidCode')){
      this.submitToken.next('invalidCode');
    }else if(values.controls['token'].hasError('invalidWords')){
      this.submitToken.next('invalidWords');
    } else{
      this.submitToken.next('');
      validToken=true;
    }

    if(validToken){
      if(this.action=="codigo"){
        this.router.navigate(['./',values.controls['token'].value],{relativeTo:this.route});
      }else{

      }
    }
  }

	public get $action(): string {
		return this.action;
	}

  ngOnInit(): void {
  }

}

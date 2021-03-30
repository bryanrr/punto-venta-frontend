import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-input',
  templateUrl: './token-input.component.html',
  styleUrls: ['./token-input.component.css']
})
export class TokenInputComponent implements OnInit {

  private action:string;
  tokenForm:FormGroup;

  constructor(private route:ActivatedRoute, private fb:FormBuilder) { 
    route.params.subscribe(param=>{this.action=param['action']});
    this.tokenForm=this.fb.group({
      'token':''
    });
  }

  submitTokenForm(values):void{
  }

	public get $action(): string {
		return this.action;
	}

  ngOnInit(): void {
  }

}

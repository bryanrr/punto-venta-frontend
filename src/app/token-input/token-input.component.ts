import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-input',
  templateUrl: './token-input.component.html',
  styleUrls: ['./token-input.component.css']
})
export class TokenInputComponent implements OnInit {

  private action:string;

  constructor(private route:ActivatedRoute) { 
    route.params.subscribe(param=>{this.action=param['action']});
  }

  ngOnInit(): void {
  }

}

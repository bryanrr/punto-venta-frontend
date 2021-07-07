import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sold-pieces',
  templateUrl: './sold-pieces.component.html',
  styleUrls: ['./sold-pieces.component.css']
})
export class SoldPiecesComponent implements OnInit {

  soldPiecesForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.soldPiecesForm=this.fb.group({
      'codigobarra':'',
      'fechaInicio':'',
      'fechaFin':''
    });
  }

  onSubmit(values):void{
    
  }  

  ngOnInit(): void {
    
  }

}

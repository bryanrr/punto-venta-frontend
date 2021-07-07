import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sold-pieces',
  templateUrl: './sold-pieces.component.html',
  styleUrls: ['./sold-pieces.component.css']
})
export class SoldPiecesComponent implements OnInit {

  soldPiecesForm:FormGroup;

  constructor() { }

  onSubmit(values):void{

  }  

  ngOnInit(): void {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}

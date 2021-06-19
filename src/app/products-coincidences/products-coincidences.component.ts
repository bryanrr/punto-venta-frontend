import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-coincidences',
  templateUrl: './products-coincidences.component.html',
  styleUrls: ['./products-coincidences.component.css']
})
export class ProductsCoincidencesComponent implements OnInit {

  private coincidenceString:string;

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params=>this.coincidenceString=params['coincidenceString']);
  }

	public get $coincidenceString(): string {
		return this.coincidenceString;
	}


  ngOnInit(): void {
  }

}

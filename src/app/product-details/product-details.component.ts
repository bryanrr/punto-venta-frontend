import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private codigo:string;

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params=>this.codigo=params['code']);
  }

	public get $codigo(): string {
		return this.codigo;
	}


  ngOnInit(): void {
  }

}
